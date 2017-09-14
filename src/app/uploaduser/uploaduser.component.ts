import { Component, OnInit } from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
import {UsermodalComponent} from './usermodal/usermodal.component';
import {DeletemodalComponent} from "./deletemodal/deletemodal.component"

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}
@Component({
    moduleId: module.id,
  selector: 'app-uploaduser',
  templateUrl: './uploaduser.component.html',
  styleUrls: ['./uploaduser.component.css']
})
export class UploaduserComponent implements OnInit {
    model: any = [];
    public dataTable: DataTable;
    length;

    constructor(private dialogService: DialogService) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Email', 'First Name', 'Last Name', 'Country' , 'Change Password'],
            footerRow: ['', '', '', '', ''],

            dataRows: [
                this.model
            ]
        };
    }

    onFormSubmit(userForm: NgForm) {

        console.log('user detail', userForm);
        this.model.push(userForm.value);
        console.log('model',this.model);

    }
    deleteData(i)
    {
        // Delete Api
        this.model.splice(this.model.indexOf(i), 1);
    }
    // deleteData(i)
    // {
    //     let pos = this.model.indexOf(i);
    //
    //     console.log('index', pos);
    //     this.dialogService.addDialog(DeletemodalComponent, { index: pos}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
    //         .subscribe((data) => {
    //             if(data.userForm) {
    //
    //                 // Edit Api
    //                 this.model[data.index] = data.userForm;
    //             }
    //         });
    //
    // }

    openModal(){
        this.dialogService.addDialog(UsermodalComponent, {index: undefined, data:{}}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data)=>{
                if(data.userForm) {
                    // Add Api
                    this.model.push(data.userForm);
                }
            });
    }
    EditData(index)
    {
        let position = this.model.indexOf(index);
        let i = this.model[position];

        console.log('index', position);
        console.log('data', i);
        const copy = Object.assign({}, i);
        this.dialogService.addDialog(UsermodalComponent, { index: position,
            data:(copy)}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data) => {
                if(data.userForm) {

                    // Edit Api
                    this.model[data.index] = data.userForm;
                }
            });


    }
    clear(userForm: NgForm) {
        userForm.reset();
    }
}
