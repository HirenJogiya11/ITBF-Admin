import {Component, OnInit} from '@angular/core';
import {CreatesiteComponent} from './createsite/createsite.component';
import {ModalService} from '../service/modal.service';
import {SiteService} from '../service/site.service';
import {NewSite} from "../model/newsite.interface";

import {DeletesiteComponent} from "./deletesite/deletesite.component";
import {EditsiteComponent} from "./editsite/editsite.component";
import _ from 'lodash';
declare var $: any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

    public dataTable: DataTable;
    public wholeArray: any;
    public table: any;
    public sites: NewSite[];
    public imagepath: string = 'http://192.168.200.72:4200';

    constructor(private modalService: ModalService, private Siteservice: SiteService) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['SiteName', 'CoverImage'],
            footerRow: ['', ''],
            dataRows: []
        };
        this.getallsite();
    }

    getallsite() {

        this.Siteservice.getAllSite()
            .subscribe(data => {
                this.wholeArray = data;
                const Counter = this.wholeArray.length;

                console.log(this.wholeArray);
                for (let i = 0; i < Counter; i++) {
                    this.dataTable.dataRows.push(this.wholeArray.shift());
                }
                // var that = this;
                // setTimeout(function () {
                //     that.dataTableConfig();
                //     // that.addNewItem();
                // });
            });
    }

    // dataTableConfig() {
    //     this.table = $('#datatables1').DataTable({
    //         'pagingType': 'full_numbers',
    //         'lengthMenu': [[10, 20, 25, 50, -1], [10, 20, 25, 50, 'All']],
    //         'searching': false,
    //         'deferRender': true,
    //         responsive: true,
    //         language: {
    //             search: '_INPUT_',
    //             searchPlaceholder: 'Search records'
    //         }
    //     });
    // }

    add() {
        this.modalService.open(CreatesiteComponent, null)
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    this.dataTable.dataRows.push(data);
                }
            });
    }

    EditSite(site) {
        let copy = Object.assign({}, site);
        this.modalService.open(EditsiteComponent, {title: '', data: copy})
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', site._id]);
                    this.dataTable.dataRows[index] = data;
                }
            });
    }

    deleteSite(site) {

        this.modalService.open(DeletesiteComponent, {title: '', data: site})
            .subscribe((data) => {
                if (data) {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', site._id]);
                    this.dataTable.dataRows.splice(index,1);
                }
            });
    }

}
