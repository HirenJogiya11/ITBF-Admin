// import {Component, OnInit} from '@angular/core';
//
// import {AdduserComponent} from "./adduser/adduser.component";
// import {UserAdminService} from "../services/userAdmin.service";
//
// import {ModalService} from '../service/modal.service';
// import {SiteService} from '../service/site.service';
// import _ from 'lodash';
// import {EditlanguageComponent} from "./editlanguage/editlanguage.component";
//
// export class UserComponent implements OnInit {
//     public dataTable: DataTable;
//     public wholeArray: any;
//     public table: any;
//
//
//
//
//
//     deleteLanguage(language) {
//
//         this.modalService.open(DeletelanguageComponent, {title: '', data: language})
//             .subscribe((data) => {
//                 if (data) {
//                     const index = _.findIndex(this.dataTable.dataRows, ['_id', language._id]);
//                     this.dataTable.dataRows.splice(index,1);
//                 }
//             });
//     }
//     deleteData(i) {
//         let id = i._id;
//         let pos = this.modal.indexOf(i);
//
//         console.log('index', pos);
//         this.dialogService.addDialog(DeletemodalComponent, {index: id}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
//             .subscribe((data) => {
//                 if (data) {
//                     this.useradminservice.DeleteUserData(data.index)
//                         .subscribe(deletedata => {
//                                 this.getUsers();
//                                 console.log('save', deletedata);
//                             },
//                             err => {
//                                 console.log('Error', err);
//                             });
//                     // console.log(this.modal);
//                     // console.log('delete data', data.index);
//                     // this.modal.splice(data.index, 1);
//                 }
//             });
//
//     }
//
//     openModal() {
//         this.dialogService.addDialog(AdduserComponent, {
//             index: undefined,
//             data: {}
//         }, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
//             .subscribe((data) => {
//
//                 if (data && data.userForm) {
//                     data = {
//                         firstname: data.userForm.firstName,
//                         lastname: data.userForm.lastName,
//                         email: data.userForm.email,
//                         password: data.userForm.changePassword,
//                         location: {
//                             Country: data.userForm.Country,
//                         },
//                         role: data.userForm.role
//                     };
//                     this.useradminservice.AddUserData(data)
//                         .subscribe(data => {
//                                 this.getUsers();
//                                 console.log('save', data);
//                             },
//                             err => {
//                                 console.log('Error', err);
//                             });
//                 }
//             });
//
//     }
//
//     Editdata(index) {
//         let id = index._id;
//         let position = this.modal.indexOf(index);
//         let i = this.modal[position];
//
//         console.log('index', position);
//         console.log('data', i);
//         const copy = Object.assign({}, i);
//         this.dialogService.addDialog(AdduserComponent, {
//             index: position,
//             data: (copy)
//         }, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
//             .subscribe((data) => {
//                 if (data.userForm) {
//                     data = {
//                         firstname: data.userForm.firstName,
//                         lastname: data.userForm.lastName,
//                         email: data.userForm.email,
//                         password: data.userForm.changePassword,
//                         location: {
//                             Country: data.userForm.Country,
//                         },
//                         role: data.userForm.role
//                     };
//                     debugger
//                     this.useradminservice.EditUserData(data, id)
//                         .subscribe(editdata => {
//                                 this.getUsers();
//                                 console.log('editdata', editdata);
//                             },
//                             err => {
//                                 console.log('Error', err);
//                             });
//                     this.modal[data.index] = data.userForm;
//                 }
//             });
//     }
// }
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
                console.log(data);
                this.dataTable.dataRows = data;

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
        debugger;
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







