import {Component, OnInit} from '@angular/core';
import {Pack} from '../../model/pack.interface';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from '../../service/pack.service';
import {DeleteaudioComponent} from './deleteaudio/deleteaudio.component';
import {ModalService} from '../../service/modal.service';
import _ from 'lodash';
import {EdittotalsiteComponent} from "./edittotalsite/edittotalsite.component";
declare var $: any;

export interface Model {
    title: string;
    Data: any;

}

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}

@Component({
    selector: 'app-totalaudio',
    templateUrl: './totalaudio.component.html',
    styleUrls: ['./totalaudio.component.css']
})


export class TotalaudioComponent extends DialogComponent<Model, any> implements OnInit {

    public dataTable: DataTable;
    public BasePath: string = 'http://192.168.200.72:4200';
    data: any;
    packid: any
    sites: any;
    model: any[];
    table: any;

    constructor(private dialogservice: DialogService,
                private modalservice: ModalService) {
        super(dialogservice);
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.dataTable = {
            headerRow: ['Name', 'CoverImage', 'FootStrapImage', 'Audio', 'Action'],
            footerRow: ['', '', '', '', '', ''],
            dataRows: []
        };

        this.getsite();
    }

    getsite() {
        this.dataTable.dataRows = this.data;
        console.log('Total Sites'  , this.dataTable.dataRows);
    }

    EditTotalSite(site) {
        const copy = Object.assign({}, site);
        this.modalservice.open(EdittotalsiteComponent, {
            title: '',
            data: copy,
            packid: this.packid
        }).subscribe((data) => {
            document.getElementsByTagName('body')[0].classList.add('modal-open');
            console.log('return data', data);
            if (typeof(data) === 'object') {
                const index = _.findIndex(this.dataTable.dataRows, ['_id', site._id]);
                this.dataTable.dataRows[index] = data;
            }
        });
    }

    //
    deleteTotalSite(site) {

        const copy = Object.assign({}, site);
        this.modalservice.open(DeleteaudioComponent, {title: '', data: copy, packid: this.packid})
            .subscribe((data) => {
                document.getElementsByTagName('body')[0].classList.add('modal-open');
                if (data) {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', site._id]);
                    this.dataTable.dataRows.splice(index, 1);
                }
            });
    }
}
