import {Component, OnInit} from '@angular/core';
import {Pack} from '../../model/pack.interface';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { NgForm } from '@angular/forms';
import {PackService} from '../../service/pack.service';


// declare var require: any;
declare var $: any;

@Component({
    selector: 'app-addpackmodal',
    templateUrl: './addpackmodal.component.html',
    styleUrls: ['./addpackmodal.component.css']
})
export class AddpackmodalComponent extends DialogComponent<Pack, any> implements OnInit {

    packname: string = '';
    language: string = '';

    constructor(private dialogservice: DialogService, private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {

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
        this.packname = event.target.value + 'pack';
    }

    OnSubmit(addpack: NgForm) {
        const newpack = new Pack(addpack.value.packname, addpack.value.language);
        this.packservice.addaudiopack(newpack);
    }
}


