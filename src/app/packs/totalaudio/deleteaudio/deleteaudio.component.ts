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

    data: any;

    constructor(private dialogservice: DialogService , private packservice: PackService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

     Delete() {
          //  console.log('delete id' , this.data._id);
     //    console.log('delete id' , this.data.siteId._id);
     }

    confirm(){
        this.close();
    }
}
