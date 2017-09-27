import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {SiteService} from "../../service/site.service";
import {ToastrService} from "toastr-ng2";

export interface Model {
    title: string ;
    data: number ;
}

@Component({
    selector: 'app-deletesite',
    templateUrl: './deletesite.component.html',
    styleUrls: ['./deletesite.component.css']
})
export class DeletesiteComponent extends DialogComponent<Model, any> implements OnInit {

    constructor(private dialogservice: DialogService,
                private Siteservice: SiteService,
                private toastrService: ToastrService) {
        super(dialogservice);
    }

    data: any;

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    Delete() {
        this.Siteservice.deletesite(this.data._id).subscribe((data) => {
                //   console.log('save', res);
                this.toastrService.success('Your Site has been Delete Successfully');
                this.result = data;
                this.close();
            },
            error => {
                //  console.log('save', error);
                const err = JSON.parse(error._body);
                this.toastrService.error(err.error);
            });
    }

}
