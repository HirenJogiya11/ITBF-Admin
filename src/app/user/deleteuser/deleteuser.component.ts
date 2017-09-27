
import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {UserAdminService} from "../../services/userAdmin.service";

export interface Model {
    title: string ;
    data: number ;
}

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
    export class DeleteuserComponent extends DialogComponent<Model, any> implements OnInit {

    constructor(private dialogservice: DialogService, private userservice: UserAdminService) {
        super(dialogservice);
    }

    data: any;

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    Delete() {
        this.userservice.DeleteUserData(this.data._id).subscribe((res: Response) => {
                console.log('save', res);
                this.result = res;
                this.close();
            },
            error => {
                console.log('save', error);
            });

    }

}
