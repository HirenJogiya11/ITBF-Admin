import {Component, OnInit} from '@angular/core';
import {ModalService} from '../service/modal.service';
import {SiteService} from '../service/site.service';
import _ from 'lodash';
import {CreatelanguageComponent} from "./createlanguage/createlanguage.component";
import {LanguageService} from "../services/language.service";
import {EditlanguageComponent} from "./editlanguage/editlanguage.component";
import {DeletelanguageComponent} from "./deletelanguage/deletelanguage.component";

declare var $: any;
declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {


    public dataTable: DataTable;
    public wholeArray: any;
    public table: any;

    constructor(private modalService: ModalService, private languageService: LanguageService,) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Language Name', 'Display Name', 'Action'],
            footerRow: ['', '', ''],
            dataRows: []
        };
        this.getallLanguage();

    }

    getallLanguage() {

        this.languageService.GetLanguage()
            .subscribe(data => {
                this.wholeArray = data;
                const Counter = this.wholeArray.length;

                console.log(this.wholeArray);
                for (let i = 0; i < Counter; i++) {
                    this.dataTable.dataRows.push(this.wholeArray.shift());
                }
                var that = this;
                setTimeout(function () {
                    that.dataTableConfig();
                    // that.addNewItem();
                });
            });
    }

    dataTableConfig() {
        this.table = $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[5 ,10, 20, 25, 50, -1], [5, 10, 20, 25, 50, 'All']],
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
        this.modalService.open(CreatelanguageComponent, null)
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    this.dataTable.dataRows.push(data);
                }
            });
    }

    EditLanguage(language) {
        let copy = Object.assign({}, language);

        this.modalService.open(EditlanguageComponent, {title: '', data: copy})
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', language._id]);
                    this.dataTable.dataRows[index] = data;
                }
            });
    }

    deleteLanguage(language) {

        this.modalService.open(DeletelanguageComponent, {title: '', data: language})
            .subscribe((data) => {
                if (data) {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', language._id]);
                    this.dataTable.dataRows.splice(index,1);
                }
            });
    }

}




