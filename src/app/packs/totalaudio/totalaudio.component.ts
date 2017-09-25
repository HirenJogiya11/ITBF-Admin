import {Component, OnInit} from '@angular/core';
import {Pack} from '../../model/pack.interface';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from '../../service/pack.service';
import {DeleteaudioComponent} from './deleteaudio/deleteaudio.component';
import {ModalService} from '../../service/modal.service';
import _ from 'lodash';
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
    public imagepath: string = 'http://192.168.200.72:4200';
    data: any;
    sites: any;
    model: any[];
    table: any;

    constructor(private dialogservice: DialogService,
                private  packservice: PackService,
                private modalservice: ModalService) {
        super(dialogservice);
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.dataTable = {
            headerRow: ['Name', 'CoverImage', 'FootStrapImage', 'Audio', 'Edit', 'Delete'],
            footerRow: ['', '', '', '', '', ''],
            dataRows: []
        };

        this.getsite();
    }

    getsite() {
        this.dataTable.dataRows = this.data;
        console.log(this.dataTable.dataRows);
        // const that = this;
        // setTimeout(function () {
        //     that.dataTableConfig();
        //     // that.addNewItem();
        // });
    }

    dataTableConfig() {
        this.table = $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, 'All']],
            'searching': false,
            'deferRender': true,
            responsive: true,
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records'
            }
        });
    }

    //
    // deleteAudio(i) {
    //
    //     this.modalservice.open(DeleteaudioComponent, {title: '', data: i})
    //         .subscribe((data) => {
    //
    //         });
    // }
}
