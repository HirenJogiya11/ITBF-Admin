import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {PackService} from "../../service/pack.service";
import {ToastrService} from "toastr-ng2";

declare var $: any;

export interface Model {
    title: string ;
    data: any ;
}


@Component({
    selector: 'app-editaudio',
    templateUrl: './editaudio.component.html',
    styleUrls: ['./editaudio.component.css']
})
export class EditaudioComponent extends DialogComponent<Model, any> implements OnInit {


    data: any;
    packs: any;
    Backuppack;
    // language = this.data.language;
    // price = this.data.price;
    // name = this.data.name;

    constructor(private dialogservice: DialogService, private packservice: PackService, private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.getpack();
        this.Backuppack = {...this.data};
    }

    getpack() {
        this.packservice.getPack().subscribe((data) => {
                this.packs = data;
                var that = this;
                setTimeout(function () {
                    that.initialize();
                });
            },
            error => {
                console.log('save', error);
            });
    }


    initialize() {
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


    save() {
        let newData = {
            _id : this.data._id,
        };
        const self = this;
        Object.keys(this.data).forEach((key) =>{
            if(self.data[key] !== self.Backuppack[key]){
                newData[key] = self.data[key];
            }
        });
        this.packservice.EditAudio(newData).subscribe(data => {
                console.log('save', data);
                this.toastrService.success('Your Data has been updated Successfully');
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
