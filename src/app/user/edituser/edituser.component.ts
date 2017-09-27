import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {UserService} from "../../services/users.service";
import {UserAdminService} from "../../services/userAdmin.service";
import {ToastrService} from "toastr-ng2";

declare var $: any;
export interface Model {
    title: any ;
    data:any;
}


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent extends DialogComponent<Model , any> implements OnInit {

  data: any;
  constructor(private  dialogservice: DialogService,private tostarservice: ToastrService, private  userdatasarvice: UserAdminService) {
    super(dialogservice);
  }

  ngOnInit() {
      if(this.data.location)
      {
          this.data.Country = this.data.location.Country;
      }
    console.log(this.data);
  }
  onFormSubmit(userdata)
  {
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
      this.userdatasarvice.EditUserData(user, this.data._id)
          .subscribe(data => {
                  console.log('save', data);
                  this.tostarservice.success('Your Site has been Create Successfully');
                  this.result = data;
                  this.close();
              },
              error => {
                  console.log('error', error);
                  const err = JSON.parse(error._body);
                  this.tostarservice.error(err.error);
              });
  }

}
