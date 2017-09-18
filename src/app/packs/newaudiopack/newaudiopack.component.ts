import {Component, OnInit} from '@angular/core';

import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {PackService} from '../../service/pack.service';
import {Site} from "../../model/site.interface";

export interface Model {
    title: string ;
    data: any ;
}
@Component({
    selector: 'app-newaudiopack',
    templateUrl: './newaudiopack.component.html',
    styleUrls: ['./newaudiopack.component.css']
})
export class NewaudiopackComponent extends DialogComponent<Model, any> implements OnInit {

    Sitename: string = '';
    title: string;
    data: any;
    image: any;
    imagefile: any;
    audio: any;
    formdata: FormData;
    imageName: string = '';
    res: any;
    final: any;

    result: any = [];

    constructor(private dialogservice: DialogService, private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {
        console.log('this data', this.data);
    }

    getimage($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        console.log(file);
        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }

    // getimage(event) {
    //     this.image = event.target.files[0];
    //     this.imagefile = this.image;
    //     console.log(this.image);
    // }

    // getAudio(event) {
    //     this.audio = event.target.files[0];
    // }

    getAudio($event): void {
        this.res = event.srcElement;
        this.final = this.res.files[0].name;
    }

    OnSubmit(audiopack: NgForm) {

        const site = new Site(
            this.data.packname,
            this.data.language,
            {
                'sitename': this.Sitename,
                'imagefile': this.image,
                'audiofile': this.audio,
            }
        );

        this.packservice.addnewsite(site);

    }


}
