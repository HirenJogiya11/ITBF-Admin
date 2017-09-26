import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {ToastrService} from 'toastr-ng2';
import {LanguageService} from "../../services/language.service";


export interface Model {
    title: any ;
}
@Component({
  selector: 'app-createlanguage',
  templateUrl: './createlanguage.component.html',
  styleUrls: ['./createlanguage.component.css']
})
export class CreatelanguageComponent  extends DialogComponent<Model, any> implements OnInit  {
    data = [];
    constructor(private dialogservice: DialogService,
                private languageService: LanguageService,
                private toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {

        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }
    onFormSubmit(addData) {
       let data = {
            language: addData.language,
            displayName: addData.displayName

        };

        this.languageService.AddLanguage(data)
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
}