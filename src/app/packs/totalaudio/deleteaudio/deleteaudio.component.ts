import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from "../../../service/pack.service";

export interface Model {
    title: string ;
    data: number ;
}
@Component({
    selector: 'app-deleteaudio',
    templateUrl: './deleteaudio.component.html',
    styleUrls: ['./deleteaudio.component.css']
})
export class DeleteaudioComponent extends DialogComponent<Model, any> implements OnInit {

    data: number;

    constructor(private dialogservice: DialogService , private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {

    }

    Delete() {
         console.log('index', this.data);
         this.packservice.deleteaudio(this.data);
    }

    confirm(){
        this.close();
    }
}
