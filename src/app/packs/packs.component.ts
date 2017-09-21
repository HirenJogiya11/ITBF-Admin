import {Component, OnInit} from '@angular/core';
import {PackService} from '../service/pack.service';
import {ModalService} from '../service/modal.service';
import {Pack} from '../model/pack.interface';
import {AddpackmodalComponent} from './addpackmodal/addpackmodal.component';
import {NewaudiopackComponent} from './newaudiopack/newaudiopack.component';
import {TotalaudioComponent} from './totalaudio/totalaudio.component';
import {Response} from '@angular/http';

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}

declare var $: any;
@Component({
    selector: 'app-packs',
    templateUrl: './packs.component.html',
    styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {


    public datatable: DataTable;
    public wholeArray: any;
    packList = [];
    counter = 1;
    table: any
    packs: any;
    sites: any;


    constructor(private packservice: PackService,
                private modalService: ModalService) {
    }


    ngOnInit() {

        this.datatable = {
            headerRow: ['Packs', 'Language', 'Add', 'Total Audio'],
            footerRow: ['', '', '', '', ''],
            dataRows: []
        };
        this.getpacks();
    }

    getpacks() {
        // this.datatable.dataRows = this.packservice.getPack();
        this.datatable.dataRows = this.packservice.getPack()
        // .subscribe(data => {
        // this.wholeArray = data;
        // var counter = this.wholeArray.length;
        //
        // console.log(this.wholeArray);
        // for (let i = 0; i < counter; i++) {
        //     this.datatable.dataRows.push(this.wholeArray.shift());
        // }

        var that = this;
        setTimeout(function () {
            that.dataTableConfig();
            // that.addNewItem();
        });
    }




    dataTableConfig() {
        this.table = $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 20, 25, 50, -1], [10, 20, 25, 50, 'All']],
            'searching': false,
            'deferRender': true,
            responsive: true,
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records'
            }
        });
    }

    add() {
        this.modalService.open(AddpackmodalComponent, null)
            .subscribe((data) => {

            });
    }

    Newaudio(pack) {
        this.modalService.open(NewaudiopackComponent, {title: '', data: pack})
            .subscribe((data) => {
                this.sites = this.packservice.getsites();
                console.log(this.sites);
            });
    }

    TotalAudio(pack) {
        this.modalService.open(TotalaudioComponent, {title: '', data: pack})
            .subscribe((data) => {

            });
    }
}

