import {Component, OnInit} from '@angular/core';
import {PackService} from '../service/pack.service';
import {ModalService} from '../service/modal.service';
import {Pack} from '../model/pack.interface';
import {AddpackmodalComponent} from './addpackmodal/addpackmodal.component';
import {NewaudiopackComponent} from './newaudiopack/newaudiopack.component';
import {TotalaudioComponent} from './totalaudio/totalaudio.component';
import {EditaudioComponent} from './editaudio/editaudio.component';
import {DeletepacksComponent} from './deletepacks/deletepacks.component';
import _ from 'lodash';
declare var $: any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}

@Component({
    selector: 'app-packs',
    templateUrl: './packs.component.html',
    styleUrls: ['./packs.component.css']
})

export class PacksComponent implements OnInit {
    public dataTable: DataTable;
    public wholeArray: any;
    packs: Pack[];
    sites: any;
    table: any;


    constructor(private packservice: PackService,
                private modalService: ModalService) {
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');
        this.dataTable = {
            headerRow: ['Packs', 'Language', 'Action', 'Total Sites'],
            footerRow: ['', '', '', ''],
            dataRows: []
        };
        this.getpacks();
    }

    getpacks() {
        this.packservice.getPack()
            .subscribe(data => {
                this.wholeArray = data;
                this.dataTable.dataRows = data;

                console.log('this packs Data', this.dataTable.dataRows)
                const that = this;
                setTimeout(function () {
                    that.dataTableConfig();
                    // that.addNewItem();
                });
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
                if (typeof(data) === 'object') {
                    this.dataTable.dataRows.push(data);
                }
            });
    }

    Newaudio(pack) {
        this.modalService.open(NewaudiopackComponent, {title: '', data: pack})
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', pack._id]);
                    this.dataTable.dataRows[index] = data;
                }
            });
    }

    TotalAudio(pack , packid) {
        this.modalService.open(TotalaudioComponent, {title: '', data: pack , packid: packid})
            .subscribe((data) => {
            });
    }

    EditPack(pack) {
        const copy = Object.assign({}, pack);
        this.modalService.open(EditaudioComponent, {title: '', data: copy})
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', pack._id]);
                    this.dataTable.dataRows[index] = data;
                }
            });
    }

    DeletePack(pack) {
        this.modalService.open(DeletepacksComponent, {title: '', data: pack})
            .subscribe((data) => {
                if (data) {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', pack._id]);
                    this.dataTable.dataRows.splice(index, 1);
                }
            });
    }
}

