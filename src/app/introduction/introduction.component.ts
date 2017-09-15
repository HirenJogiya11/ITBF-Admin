import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
    result:any;
    imageName:string = null;
    res:any;
    final: string;
    audioName:string = null;
    imagedata:any = [];
    audiodata:any = [];
    formdata:FormData;
  constructor() { }

  ngOnInit() {
  }
    onChange($event):void {

       this.imagedata = $event.target.files[0];
        this.readThis($event.target);
    }

    readThis(inputValue:any):void {
        let file:File = inputValue.files[0];
        let myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }
    onChangemp($event):void {
      this.audiodata = $event.target.files[0];
    this.res = event.srcElement;
    this.final = this.res.files[0].name;
    }

    save() {
      debugger
        this.formdata = new FormData();

                this.formdata.append('image file', this.imagedata, this.imagedata.name);
                this.formdata.append('audio file', this.audiodata, this.audiodata.name);
                console.log(this.formdata);
        // Add file data
        // this.audiopackservice.addaudiopack(this.formdata)
        //     .subscribe((response: Response) => {
        //         console.log('save');
        //     });

    }
}
