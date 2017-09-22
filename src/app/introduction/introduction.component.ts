import { Component, OnInit } from '@angular/core';
import {ToastrService} from "toastr-ng2";
import {IntroductionService} from "../services/introduction.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
    button:boolean;
    playaudio:string;
    play:string;
    result:any;
    imageName:string = null;
    res:any;
    final: string;
    image:string;
    audio:string;
    imagedata:any = [];
    audiodata:any = [];
    formdata:FormData;
  constructor( private toastrService: ToastrService, private introductionservice: IntroductionService) { }

  ngOnInit() {
      this.introductionservice.getIntroductionData()
          .subscribe(data => {

              this.result = 'http://192.168.200.72:4200/' + data[0].image;
              this.playaudio = 'http://192.168.200.72:4200/' + data[0].audio;
                  this.button = true;
               this.final = this.playaudio;
              console.log('save', this.playaudio);
              },
              err => {
                  console.log('Error', err);
              });
  }
    onChange($event):void {

       this.imagedata = $event.target.files[0];
       this.image= this.imagedata.type.toString();
        this.image = this.image.slice(0, 5).toString();
        if(this.image === 'image') {
            this.readThis($event.target);
        }
        else
        {
            this.toastrService.error('Please, Select valid Image file');
        }

    }

    readThis(inputValue:any):void {
        let file:File = inputValue.files[0];
        let myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
            if(this.result && this.final) {
                this.button = true;
            }
        };
        myReader.readAsDataURL(file);

    }
    onChangemp($event):void {
      this.audiodata = $event.target.files[0];
      console.log(this.audiodata);
        this.audio = this.audiodata.type.toString();
        this.audio = this.audio.slice(0, 5).toString();
        console.log(this.audio);
        if(this.audio === 'audio') {
            this.res = event.srcElement;
            this.final = this.res.files[0].name;
        }
        else
        {
            this.toastrService.error('Please, Select valid Audio file');
        }
        if(this.result && this.final) {
            this.button = true;
        }
    }
    daleteImage(){
      this.result = null;
            this.button = false;
 }
    daleteAudio(){
        this.final = null;
        this.button = false;
    }
    save() {

          this.formdata = new FormData();
          this.formdata.append('introImage', this.imagedata, this.imagedata.name);
          this.formdata.append('introAudio', this.audiodata, this.audiodata.name);
          console.log(this.formdata);
          this.introductionservice.addIntroductionData(this.formdata)
              .subscribe(data => {
                  console.log('save', data);
              },
                  err => {
                      console.log('Error', err);
                  });
        this.toastrService.success('Successfully File Uploaded ');
        this.playaudio='';
        this.ngOnInit();

        // this.result=null;
        // this.final=null;
        //     this.button = false;
    }
}
