import {Component, OnInit} from '@angular/core';
import {User} from  '../model/user.interface';
import {LoginService} from '../services/login.service';
import {Router} from "@angular/router";
import {ToastrService} from 'toastr-ng2';
import {debounce} from "rxjs/operator/debounce";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    test: Date = new Date();
    model: any = {};
    admin: User[];
    role: string;
    isError = false;

    constructor(private loginService: LoginService,
                private router: Router,
                private toastrService: ToastrService) {
    }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    }

    ngOnInit() {
        localStorage.clear();
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }

    login(admin) {
        localStorage.setItem('role', 'Admin');
        localStorage.setItem('token', 'gjhjkhjkhbkhjkhbhbjkbhjbhjk');
        window.location.href = '/introduction';
        this.loginService.login(admin).subscribe(
            response => {
                console.log(response);
                if (response.role === 'Admin') {
                    this.toastrService.success('welcome ' + response.role);
                    localStorage.setItem('role', 'Admin');

                    window.location.href = '/introduction';
                }
                else if (response.role === 'TourOperator') {
                    this.toastrService.success('welcome ' + response.role);
                    localStorage.setItem('role', 'TourOperator');
                    window.location.href = '/dashboard';
                }
                else {
                    this.isError = true;
                }
            },
            error => {
                this.toastrService.error('You Enter Wrong username and password');
            }
        );
    }
}
