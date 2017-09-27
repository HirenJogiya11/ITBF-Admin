import {Component, OnInit} from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {DeletemodalComponent} from '../uploaduser/deletemodal/deletemodal.component';
import {AdduserComponent} from "./adduser/adduser.component";
import {UserAdminService} from "../services/userAdmin.service";
import {UserModal} from "./usermodal";

declare var $: any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['../uploaduser/uploaduser.component.css']
})
export class UserComponent implements OnInit {

    modal = [];
    public table: any;
    public dataTable: DataTable;
    length;

    constructor(private dialogService: DialogService, private useradminservice: UserAdminService) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
     this.getUsers();
    }
    getUsers(){
        this.useradminservice.GetUserData()
            .subscribe(data => {

                    this.modal = data;
                    let that = this;
                    setTimeout(function () {
                        that.dataTableConfig();
                        // that.addNewItem();
                    });
                    console.log('save', data);
                },
                err => {
                    console.log('Error', err);
                });
        this.dataTable = {
            headerRow: ['Email', 'First Name', 'Last Name', 'Country', 'Role' , 'Action'],
            footerRow: ['', '', '', '', '', '', ''],

            dataRows: [
                this.modal
            ]
        };
        console.log(this.modal);
    }
    dataTableConfig() {
        this.table = $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "All"]],
            "searching": false,
            "deferRender": true,
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });

    }

    // deleteData(i) {
    //     this.useradminservice.DeleteUserData(i)
    //         .subscribe(data => {
    //                 this.getUsers();
    //                 console.log('save', data);
    //             },
    //             err => {
    //                 console.log('Error', err);
    //             });
    //     // // Delete Api
    //     // this.model.splice(this.model.indexOf(i), 1);
    // }

    deleteData(i)
    {
        let id = i._id;
        let pos = this.modal.indexOf(i);

        console.log('index', pos);
      //  debugger
        this.dialogService.addDialog(DeletemodalComponent, { index: id}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data) => {
                if (data) {
                    this.useradminservice.DeleteUserData(data.index)
                        .subscribe(deletedata => {
                                this.getUsers();
                                console.log('save', deletedata);
                            },
                            err => {
                                console.log('Error', err);
                            });
                    // console.log(this.modal);
                    // console.log('delete data', data.index);
                    // this.modal.splice(data.index, 1);
                }
            });

    }

    openModal() {
        this.dialogService.addDialog(AdduserComponent, {
            index: undefined,
            data: {}
        }, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data) => {

                if (data && data.userForm) {
                    data = {
                        firstname: data.userForm.firstName,
                        lastname: data.userForm.lastName,
                        email: data.userForm.email,
                        password: data.userForm.changePassword,
                        location: {
                            Country: data.userForm.Country,
                        },
                        role: data.userForm.role
                    };
                    this.useradminservice.AddUserData(data)
                        .subscribe(data => {
                                this.getUsers();
                                console.log('save', data);
                            },
                            err => {
                                console.log('Error', err);
                            });
                }
            });

    }

    Editdata(index) {
     //   debugger;
        let id = index._id;
        let position = this.modal.indexOf(index);
        let i = this.modal[position];

        console.log('index', position);
        console.log('data', i);
        const copy = Object.assign({}, i);
        this.dialogService.addDialog(AdduserComponent, { index: position,
            data:(copy)}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data) => {
                if(data.userForm) {
                    data = {
                        firstname: data.userForm.firstName,
                        lastname: data.userForm.lastName,
                        email: data.userForm.email,
                        password: data.userForm.changePassword,
                        location: {
                            Country: data.userForm.Country,
                        },
                        role: data.userForm.role
                    };
                  //  debugger
                    this.useradminservice.EditUserData(data, id)
                        .subscribe(editdata => {
                                this.getUsers();
                                console.log('editdata', editdata);
                            },
                            err => {
                                console.log('Error', err);
                            });
                    this.modal[data.index] = data.userForm;
                }
            });
    }

    clear(userForm: NgForm) {
        userForm.reset();
    }

}
