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
  constructor() { }

  ngOnInit() {
  }
    onChange($event):void {


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
    this.res = event.srcElement;
    this.final = this.res.files[0].name;
    }

    read(inputValue:any):void {
        let filedata:File = inputValue.files[0];
        let myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.res = myReader.result;
            // Base64 data console.log(this.result);
            this.audioName = filedata.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(filedata);
    }
}
