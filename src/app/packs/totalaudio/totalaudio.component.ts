import {Component, OnInit} from '@angular/core';
import {Pack} from '../../model/pack.interface';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from '../../service/pack.service';
import {DeleteaudioComponent} from './deleteaudio/deleteaudio.component';
import {ModalService} from '../../service/modal.service';

declare var $: any;

export interface Model {
    index: number;

}

@Component({
    selector: 'app-totalaudio',
    templateUrl: './totalaudio.component.html',
    styleUrls: ['./totalaudio.component.css']
})


export class TotalaudioComponent extends DialogComponent<Model, any> implements OnInit {

    data: any;
    sites: any;
    dsites: any;
    model: any[];

    constructor(private dialogservice: DialogService,
                private  packservice: PackService,
                private modalservice: ModalService) {
        super(dialogservice);
    }

    ngOnInit() {

        this.getsite();

    }

    getsite() {
        this.sites = this.packservice.getsite(this.data);
        console.log('Total data',this.sites);
    }

    deleteAudio(i) {

        this.modalservice.open(DeleteaudioComponent, {title : '' , data: i})
            .subscribe((data) => {

        });
    }
}
