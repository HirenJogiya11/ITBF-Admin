import {Component, OnInit} from '@angular/core';
import {Pack} from '../../model/pack.interface';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from "../../service/pack.service";
declare var $: any;

export interface Model {
    title: string ;
    data: any ;
}

@Component({
    selector: 'app-totalaudio',
    templateUrl: './totalaudio.component.html',
    styleUrls: ['./totalaudio.component.css']
})


export class TotalaudioComponent extends DialogComponent<Model, any> implements OnInit {

    data: any;
    sites: any;

    constructor(private dialogservice: DialogService, private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {
        this.getsite();
    }

    getsite() {
        this.sites = this.packservice.getsite(this.data.packname);
        console.log(this.sites);
    }
}
