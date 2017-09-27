import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {PackService} from '../../../service/pack.service';
import {ToastrService} from 'toastr-ng2';

export interface Model {
    title: string ;
    data: any ;
}

@Component({
    selector: 'app-deleteaudio',
    templateUrl: './deleteaudio.component.html',
    styleUrls: ['./deleteaudio.component.css']
})

export class DeleteaudioComponent extends DialogComponent<Model, any> implements OnInit , OnDestroy {

    data: any;
    packid: any;

    constructor(private dialogservice: DialogService,
                private packservice: PackService, private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    Delete() {
        this.packservice.deletesite(this.packid, this.data._id)

            .subscribe(data => {
                   // console.log('save', data);
                    this.toastrService.success('Delete Your File Successfully');
                    this.result = data;
                    this.close();
                },
                error => {
                 //   console.log('error', error);
                    const err = JSON.parse(error._body);
                    this.toastrService.error(err.error);
                });

    }

    ngOnDestroy() {
            document.getElementsByTagName('body')[0].classList.add('modal-open');
    }


}
