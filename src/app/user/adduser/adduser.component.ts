import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {UserAdminService} from "../../services/userAdmin.service";
import {ToastrService} from "toastr-ng2";

declare var $: any;
export interface Model {
    title: any ;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['../user.component.css']
})
export class AdduserComponent  extends DialogComponent<Model, any> implements OnInit , AfterViewInit {
    data = [];
    constructor(private dialogservice: DialogService,
                private userAdminservice: UserAdminService,
                private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');
        if ($('.selectpicker').length !== 0) {
            $('.selectpicker').selectpicker();
        }


    }
    onFormSubmit(userdata) {
        let user = {
                        firstname: userdata.firstname,
                        lastname: userdata.lastname,
                        email: userdata.email,
                        password: userdata.password,
                        location: {
                            Country : userdata.Country,
                        },
                        role: userdata.role
                    };
        this.userAdminservice.AddUserData(user)
            .subscribe(data => {
                    console.log('save', data);
                    this.toastrService.success('Language has been Create Successfully');
                    this.result = data;
                    this.close();
                },
                error => {
                    console.log('error', error);
                    const err = JSON.parse(error._body);
                    this.toastrService.error(err.error);
                });
    }

    // initialize() {
    //     //  Init Bootstrap Select Picker
    //     if ($('.selectpicker').length) {
    //         $('.selectpicker').selectpicker();
    //     }
    //
    //     //  Dropdown Toggle
    //     $('#select_language .dropdown-toggle').click(function (event) {
    //         event.stopPropagation();
    //         $('.bootstrap-select').toggleClass('open');
    //     });
    //     $('.modal-content').click(function () {
    //         $('.bootstrap-select').removeClass('open');
    //     });
    // }

    ngAfterViewInit() {
        //this.initialize();
    }

}

