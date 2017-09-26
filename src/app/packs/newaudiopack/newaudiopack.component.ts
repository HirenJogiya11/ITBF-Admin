import {Component, OnInit, OnDestroy} from '@angular/core';

import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {PackService} from '../../service/pack.service';
import {Site} from '../../model/site.interface';
import {ToastrService} from "toastr-ng2";
import {SiteService} from "../../service/site.service";

declare var $: any;
export interface Model {
    title: string ;
    data: any ;
}
@Component({
    selector: 'app-newaudiopack',
    templateUrl: './newaudiopack.component.html',
    styleUrls: ['../../uploaduser/uploaduser.component.css']
})
export class NewaudiopackComponent extends DialogComponent<Model, any> implements OnInit, OnDestroy {

    siteid: any;
    Sites: any;
    title: string;
    data: any;
    image: any;
    footstepimage: any;
    audio: any;
    formdata: FormData;
    imageName: string = '';
    res: any;
    final: any;
    result: any;
    result1: any;
    imagetype: any;
    footsteptype: any;
    audiotype: any;
    button: any;

    constructor(private dialogservice: DialogService, private packservice: PackService,
                private toastrService: ToastrService, private  Siteservice: SiteService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.getSites();
    }


    getSites() {
        this.Siteservice.getAllSite().subscribe((data) => {
            this.Sites = data;
            const that = this;
            setTimeout(function () {
                that.initialize();
            });
        });
    }

    getimage($event): void {

        this.image = $event.target.files[0];
        this.imagetype = this.image.type.toString();
        this.imagetype = this.imagetype.slice(0, 5).toString();
        if (this.imagetype === 'image') {
            this.readThis($event.target);
        }
        else {
            this.toastrService.error('Please, Select valid Image file');
        }
    }


    getFootstepImage($event): void {
        this.footstepimage = $event.target.files[0];
        this.footsteptype = this.footstepimage.type.toString();
        this.footsteptype = this.footsteptype.slice(0, 5).toString();
        if (this.footsteptype === 'image') {
            this.readThis1($event.target);
        }
        else {
            this.toastrService.error('Please, Select valid Image file');
        }
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
      //  console.log(file);
        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }

    readThis1(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
       // console.log(file);
        myReader.onloadend = (e) => {
            this.result1 = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }


    getAudio($event): void {
        this.audio = $event.target.files[0];
        this.audiotype = this.audio.type.toString();
        this.audiotype = this.audiotype.slice(0, 5).toString();
        //     console.log(this.audio);
        if (this.audiotype === 'audio') {
            //    this.read($event.target);
            this.res = event.srcElement;
            this.final = this.res.files[0].name;
        } else {
            this.toastrService.error('Please, Select valid Audio file');
        }
    }

    removeAudio() {
        this.audio = null;
        this.button = false;
    }

    removeCoverImage() {
        this.result = null;
        this.button = false;
    }

    removeFootStrapImage() {
        this.result1 = null;
        this.button = false;
    }


    save(audiopack: NgForm) {
        //
        this.formdata = new FormData();
        this.formdata.append('packId', this.data._id);
        this.formdata.append('siteId', this.siteid);
        this.formdata.append('coverImage', this.image);
        this.formdata.append('footStrapImage', this.footstepimage);
        this.formdata.append('audioUrl', this.audio);
        //     console.log(this.formdata);
        this.packservice.addnewsite(this.formdata).subscribe(data => {
               // console.log('save', data);
                this.toastrService.success('Successfully File Uploaded ');
                this.result = data;
                this.close();
            },
            error => {
               // console.log('error', error);
                const err = JSON.parse(error._body);
                this.toastrService.error(err.error);
            });
        /*this.result = null;
         this.result1 = null;*/

        //     this.button = false;


    }


    initialize() {
        if ($('.selectpicker').length) {
            $('.selectpicker').selectpicker();
        }

        //  Dropdown Toggle
        $('#select_id .dropdown-toggle').click(function (event) {
            event.stopPropagation();
            $('.bootstrap-select').toggleClass('open');
        });
        $('.modal-content').click(function () {
            $('.bootstrap-select').removeClass('open');
        });
    }
}







