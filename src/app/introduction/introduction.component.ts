import { Component, OnInit } from '@angular/core';
import {ToastrService} from "toastr-ng2";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
    button:boolean;
    result:any;
    imageName:string = null;
    res:any;
    final: string;
    image:string;
    audio:string;
    imagedata:any = [];
    audiodata:any = [];
    formdata:FormData;
  constructor( private toastrService: ToastrService) { }

  ngOnInit() {
  }
    onChange($event):void {

       this.imagedata = $event.target.files[0];
       this.image= this.imagedata.type.toString();
        this.image = this.image.slice(0, 5).toString();
        if(this.image === 'image') {
            this.readThis($event.target);
            this.toastrService.success('Image Selected');
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
        this.audio = this.audiodata.type.toString();
        this.audio = this.audio.slice(0, 5).toString();
        console.log(this.audio);
        if(this.audio === 'audio') {
            this.res = event.srcElement;
            this.final = this.res.files[0].name;
            this.toastrService.success('Audio Selected');
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
          this.formdata.append('image file', this.imagedata, this.imagedata.name);
          this.formdata.append('audio file', this.audiodata, this.audiodata.name);
          console.log(this.formdata);
          // Add file data
          // this.audiopackservice.addaudiopack(this.formdata)
          //     .subscribe((response: Response) => {
          //         console.log('save');
          //     });
        this.toastrService.success('Successfully File Uploaded ');
        this.result=null;
        this.final=null;
            this.button = false;
    }
}
