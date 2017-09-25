import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {SiteService} from '../../service/site.service';
import {ToastrService} from 'toastr-ng2';


export interface Model {
    title: any ;
}

declare var $: any;

@Component({
    selector: 'app-createsite',
    templateUrl: './createsite.component.html',
    styleUrls: ['./createsite.component.css']
})
export class CreatesiteComponent extends DialogComponent<Model, any> implements OnInit {

    Sitename: string;
    coverimage: any;
    data: any;
    result: any;
    imageName: any;
    formdata: FormData;
    button: any;
    image: any;

    constructor(private dialogservice: DialogService,
                private siteservice: SiteService,
                private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');

        //  Init Bootstrap Select Picker
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

    getimage($event): void {
        this.coverimage = $event.target.files[0];
        this.image = this.coverimage.type.toString();
        this.image = this.image.slice(0, 5).toString();
        if (this.image === 'image') {
            this.readThis($event.target);
        } else {
            this.toastrService.error('Please, Select valid Image file');
        }
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


    removeImage() {
        this.result = null;
        this.button = false;
    }


    OnSubmit() {
        this.formdata = new FormData();
        this.formdata.append('name', this.Sitename);
        this.formdata.append('image', this.coverimage, this.coverimage.name)
        this.siteservice.AddNewSite(this.formdata)
            .subscribe(data => {
                    console.log('save', data);
                    this.toastrService.success('Your Site has been Create Successfully');
                    this.result = data;
                    this.close();
                },
                error => {
                    console.log('error', error);
                    const err = JSON.parse(error._body);
                    this.toastrService.error(err.error);
                });
    }
}
