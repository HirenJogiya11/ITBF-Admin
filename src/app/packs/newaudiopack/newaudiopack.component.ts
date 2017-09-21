import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {PackService} from '../../service/pack.service';
import {Site} from '../../model/site.interface';

export interface Model {
    title: string ;
    data: any ;
}
@Component({
    selector: 'app-newaudiopack',
    templateUrl: './newaudiopack.component.html',
    styleUrls: ['../../uploaduser/uploaduser.component.css']
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

    result: string;

    constructor(private dialogservice: DialogService, private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {

        console.log('this id', this.data[0]);
    }

    getimage($event): void {
        this.image = $event.target.files[0];
        this.imagefile = this.image.name;
        console.log(this.imagefile);
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }

    getAudio($event): void {
        this.audio = $event.target.files[0];
        this.res = event.srcElement;
        this.final = this.res.files[0].name;
    }

    OnSubmit() {
        const site = {
            packid: this.data._id,
            site: {sitename: this.Sitename, imagefile: this.image, audiofile: this.audio}
        };
        this.packservice.addnewsite(site);
        // this.formdata = new FormData();
        //
        // this.formdata.append('packid', this.data._id);
        // this.formdata.append('sitename', this.Sitename);
        // this.formdata.append('imagefile', this.image);
        // this.formdata.append('audiofile', this.audio);

    }

    clear(audiopack: NgForm) {
        audiopack.reset();
    }
}
