import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {PackService} from "../../service/pack.service";
import {ToastrService} from "toastr-ng2";

export interface Model {
    title: string ;
    data: number ;
}

@Component({
    selector: 'app-deletepacks',
    templateUrl: './deletepacks.component.html',
    styleUrls: ['./deletepacks.component.css']
})
export class DeletepacksComponent extends DialogComponent<Model, any> implements OnInit {

    data: any

    constructor(private dialogservice: DialogService,
                private packservice: PackService,
                private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }


    Delete() {
        debugger;
        this.packservice.deletepack(this.data._id).subscribe((data) => {
                console.log('save', data);
                this.toastrService.success('Your Data has been Deleted Successfully');
                this.result = data;
                this.close();
            },
            error => {
                console.log('error', error);
                const err = JSON.parse(error._body);
                this.toastrService.error(err.error);
            });

    }

}
