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
    modal: any = [];
    public dataTable: DataTable;
    length;

    constructor(private dialogService: DialogService) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Email', 'First Name', 'Last Name', 'Country' , 'Change Password'],
            footerRow: ['', '', '', '', ''],

            dataRows: [
                this.modal
            ]
        };
    }

    onFormSubmit(userForm: NgForm) {

        //console.log('user detail', userForm);
        this.modal.push(userForm.value);
        //console.log('modal', this.modal);

    }
    // deleteData(i)
    // {
    //     // Delete Api
    //     console.log(this.modal.indexOf(i));
    //     this.modal.splice(this.modal.indexOf(i), 1);
    // }
    // deleteData(i)
    // {
    //     let pos = this.modal.indexOf(i);
    //
    //     console.log('index', pos);
    //     this.dialogService.addDialog(DeletemodalComponent, { index: pos}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
    //         .subscribe((data) => {
    //         if(data) {
    //             // Delete Api
    //             console.log(this.modal);
    //             console.log('delete data', data.index);
    //             this.modal.splice(data.index, 1);
    //         }
    //         });
    //
    // }

    openModal(){
        this.dialogService.addDialog(UsermodalComponent, {index: undefined, data:{}}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data)=>{
                if(data && data.userForm) {
                    // Add Api
                    this.modal.push(data.userForm);
                }
            });
    }
    EditData(index)
    {
        let position = this.modal.indexOf(index);
        let i = this.modal[position];

      //  console.log('index', position);
      //  console.log('data', i);
        const copy = Object.assign({}, i);
        this.dialogService.addDialog(UsermodalComponent, { index: position,
            data:(copy)}, {backdropColor: 'rgba(0, 0, 0, 0.5)'})
            .subscribe((data) => {
                if(data.userForm) {

                    // Edit Api
                    this.modal[data.index] = data.userForm;
                }
            });


    }
    clear(userForm: NgForm) {
        userForm.reset();
    }
}
