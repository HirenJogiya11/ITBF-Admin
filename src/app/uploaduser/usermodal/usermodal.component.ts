import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {NgForm} from '@angular/forms';

export interface Model {
    data: any;
    index: number;
}

@Component({
    selector: 'app-usermodal',
    templateUrl: 'usermodal.component.html',
    styleUrls: ['../uploaduser.component.css']
})
export class UsermodalComponent extends DialogComponent<Model, any> implements AfterViewInit, OnInit {

    userForm: any;
    data: any;
    index: number;
    ngOnInit() {
        this.userForm = this.data;

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
          //  console.log(this.result);
            this.close();
        }
        else {
            return;
        }
    }

}
