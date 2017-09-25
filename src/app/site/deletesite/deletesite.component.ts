import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {SiteService} from "../../service/site.service";

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

    constructor(private dialogservice: DialogService, private siteservice: SiteService) {
        super(dialogservice);
    }

    data: any;

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    Delete() {
        this.siteservice.deletesite(this.data._id).subscribe((res: Response) => {
                console.log('save', res);
                this.result = res;
                this.close();
            },
            error => {
                console.log('save', error);
            });

    }

}
