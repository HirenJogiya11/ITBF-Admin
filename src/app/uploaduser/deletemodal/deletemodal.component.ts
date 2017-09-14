import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
export interface Model {
    index: number;
}
@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent  extends DialogComponent<Model, any> implements  OnInit {


    constructor(dialogService: DialogService) {
        super(dialogService);
    }
  ngOnInit() {
  }
  delete(){
      this.close();
  }
   exit(){
      this.close();
}
}
