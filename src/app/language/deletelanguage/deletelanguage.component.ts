import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {SiteService} from "../../service/site.service";
import {LanguageService} from "../../services/language.service";

export interface Model {
    title: string ;
    data: number ;
}
@Component({
  selector: 'app-deletelanguage',
  templateUrl: './deletelanguage.component.html',
  styleUrls: ['./deletelanguage.component.css']
})
export class DeletelanguageComponent extends DialogComponent<Model, any> implements OnInit {

    constructor(private dialogservice: DialogService, private languageservice: LanguageService) {
        super(dialogservice);
    }

    data: any;

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    Delete() {
        this.languageservice.DeleteLanguage(this.data._id).subscribe((res: Response) => {
               // console.log('save', res);
                this.result = res;
                this.close();
            },
            error => {
               // console.log('save', error);
            });

    }

}

