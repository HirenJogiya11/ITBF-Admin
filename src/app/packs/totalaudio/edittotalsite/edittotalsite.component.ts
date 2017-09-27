import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {ToastrService} from 'toastr-ng2';
import {NgForm} from '@angular/forms';
import {PackService} from '../../../service/pack.service';


export interface Model {
    title: string;
    data: any ;
}


@Component({
    selector: 'app-edittotalsite',
    templateUrl: './edittotalsite.component.html',
    styleUrls: ['./edittotalsite.component.css']
})
export class EdittotalsiteComponent extends DialogComponent<Model, any> implements OnInit, OnDestroy {

    data: any;
    packid: any
    result: any;
    result1: any;
    imagetype: any;
    footsteptype: any;
    imageName: any;
    audiotype: any;
    res: any;
    final: any;
    button: boolean;
    public BasePath: string = 'http://192.168.200.72:4200';
    formdata: FormData;

    constructor(private dialogservice: DialogService,
                private toastrService: ToastrService,
                private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }


    getimage($event): void {

        this.data.coverImageURL = $event.target.files[0];
        this.imagetype = this.data.coverImageURL.type.toString();
        this.imagetype = this.imagetype.slice(0, 5).toString();
        if (this.imagetype === 'image') {
            this.readThis($event.target);
        }
        else {
            this.toastrService.error('Please, Select valid Image file');
        }
    }


    getFootstepImage($event): void {
        this.data.footstepImageURL = $event.target.files[0];
        this.footsteptype = this.data.footstepImageURL.type.toString();
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
        //console.log(file);
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
      //  console.log(file);
        myReader.onloadend = (e) => {
            this.result1 = myReader.result;

            this.imageName = file.name;

        };
        myReader.readAsDataURL(file);
    }


    getAudio($event): void {
        this.data.audioURL = $event.target.files[0];
        this.audiotype = this.data.audioURL.type.toString();
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
        this.data.audioURL = null;
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

    save(editSiteform: NgForm) {
        this.formdata = new FormData();
        this.formdata.append('packId', this.packid);
        this.formdata.append('sites_id', this.data._id);
        this.formdata.append('siteId', this.data.siteId._id);
        this.formdata.append('coverImage', this.data.coverImageURL);
        this.formdata.append('footStrapImage', this.data.footstepImageURL);
        this.formdata.append('audioUrl', this.data.audioURL);
        //     console.log(this.formdata);
        this.packservice.editSite(this.formdata).subscribe(data => {
              //  console.log('save', data);
                this.toastrService.success('Successfully Update Your File  ');
                this.result = data.data;
                this.close();
            },
            error => {
              //  console.log('error', error);
                const err = JSON.parse(error._body);
                this.toastrService.error(err.error);
            });

    }

}
