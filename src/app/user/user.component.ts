import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ModalService} from '../service/modal.service';
import _ from 'lodash';
import {AdduserComponent} from "./adduser/adduser.component";
import {UserAdminService} from "../services/userAdmin.service";
import {EdituserComponent} from "./edituser/edituser.component";
import {DeleteuserComponent} from "./deleteuser/deleteuser.component";

declare var $: any;
declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any;
}

@Component({
    moduleId: module.id,
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['../uploaduser/uploaduser.component.css']
})
export class UserComponent implements OnInit{

    public dataTable: DataTable;
    public wholeArray: any;
    public table: any;


    constructor(private modalService: ModalService, private userService: UserAdminService,) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Email', 'First Name', 'Last Name', 'Country', 'Role', 'Action'],
            footerRow: ['', '', '', '', '', '', ''],
            dataRows: []
        };
        this.getalluser();

    }
    getalluser() {

        this.userService.GetUserData()
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
        // // this.userService.GetUserData()
        //     .subscribe(data => {
        //        // console.log(data);
        //         this.dataTable.dataRows = data;
        //
        //         var that = this;
        //         setTimeout(function () {
        //             that.dataTableConfig();
        //             // that.addNewItem();
        //         });
        //     });
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

    openModal() {
        debugger
        this.modalService.open(AdduserComponent, null)
            .subscribe((data) => {

                if (typeof(data) === 'object') {
                    this.dataTable.dataRows.push(data);
                }
            });
    }
    Editdata(user) {
        let copy = Object.assign({}, user);

        this.modalService.open(EdituserComponent, {title: '', data: copy})
            .subscribe((data) => {
                if (typeof(data) === 'object') {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', user._id]);
                    this.dataTable.dataRows[index] = data;
                }
            });
    }

    deleteData(language) {

        this.modalService.open(DeleteuserComponent, {title: '', data: language})
            .subscribe((data) => {
                if (data) {
                    const index = _.findIndex(this.dataTable.dataRows, ['_id', language._id]);
                    this.dataTable.dataRows.splice(index,1);
                }
            });
    }
}







