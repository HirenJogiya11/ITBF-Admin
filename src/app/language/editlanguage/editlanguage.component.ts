import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {ToastrService} from "toastr-ng2";
import {LanguageService} from "../../services/language.service";

export interface Model {
    title: string ;
    data: any ;
}

@Component({
    selector: 'app-editlanguage',
    templateUrl: './editlanguage.component.html',
    styleUrls: ['./editlanguage.component.css']
})
export class EditlanguageComponent extends DialogComponent<Model, any> implements OnInit {

    data: any;
    result: any;

    constructor(private dialogservice: DialogService,
                private languageservice: LanguageService,
                private  toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
       // console.log('edit ', this.data);
    }

    onFormSubmit(formData) {
        let list = {
            language: formData.language,
            displayName: formData.displayName

        };
       // debugger;
        this.languageservice.EditLanguage(list, this.data._id)
            .subscribe(data => {
                  //  console.log('save', data);
                    this.toastrService.success('Your Site has been Create Successfully');
                    this.result = data;
                    this.close();
                },
                error => {
                  //  console.log('error', error);
                    const err = JSON.parse(error._body);
                    this.toastrService.error(err.error);
                });
    }


}