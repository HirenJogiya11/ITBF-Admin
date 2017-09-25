import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';
declare var $: any;
export interface Model {
    data: any;
    index: number;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['../user.component.css']
})
export class AdduserComponent extends DialogComponent<Model, any> implements AfterViewInit, OnInit {

    userForm: any;
    data: any;
    index: number;
    i:number;
    ngOnInit() {
        if ($('.selectpicker').length !== 0) {
            $('.selectpicker').selectpicker();
        }
        //debugger;
        //data Mapped
        this.userForm = this.data;
        if(this.data.location)
        {
            this.data.Country = this.data.location.Country;
            //delete this.data.location.Country;
        }
        this.i = this.index;

    }

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    ngAfterViewInit() {
        this.userForm = this.data;
    }

    onFormSubmit(userForm: NgForm) {
        if (userForm.valid) {
            this.result = {userForm: userForm.value, index: this.index};
            console.log(this.result);
            this.close();
        }
    }

}

