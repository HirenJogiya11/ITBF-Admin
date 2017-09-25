import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {PackService} from '../../service/pack.service';
import {ToastrService} from "toastr-ng2";

export interface Model {
    title: string ;
}
// declare var require: any;
declare var $: any;

@Component({
    selector: 'app-addpackmodal',
    templateUrl: './addpackmodal.component.html',
    styleUrls: ['./addpackmodal.component.css']
})
export class AddpackmodalComponent extends DialogComponent<Model, any> implements OnInit {

    name: string = '';
    language: string;
    languages: any;
    Price: string;

    constructor(private dialogservice: DialogService, private packservice: PackService, private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.getLanguage();
    }

    getLanguage() {
        this.packservice.getLanguage().subscribe((data) => {
                this.languages = data;
                const that = this;
                setTimeout(function () {
                    that.initialize();
                });
            },
            error => {
                console.log('save', error);
            });
    }

    initialize() {
        //  Init Bootstrap Select Picker
        if ($('.selectpicker').length) {
            $('.selectpicker').selectpicker();
        }

        //  Dropdown Toggle
        $('#select_language .dropdown-toggle').click(function (event) {
            event.stopPropagation();
            $('.bootstrap-select').toggleClass('open');
        });
        $('.modal-content').click(function () {
            $('.bootstrap-select').removeClass('open');
        });
    }

    languagechange(event) {
        this.name = event.target.value + 'pack';
    }

    OnSubmit(addpack: NgForm) {
        const newpack = {
            name: this.name,
            language: this.language,
            price: this.Price
        };
        this.packservice.addaudiopack(newpack).subscribe(data => {
                console.log('save', data);
                this.toastrService.success('Your Data has been Added Successfully');
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


