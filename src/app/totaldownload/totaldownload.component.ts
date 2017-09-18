import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-totaldownload',
  templateUrl: './totaldownload.component.html',
  styleUrls: ['./totaldownload.component.css']
})
export class TotaldownloadComponent implements OnInit {
  Touroperator = ['a', 'b', 'c', 'd'];
  Geography = ['Goa', 'Lonawala', 'Saputara'];
  constructor() { }

  ngOnInit() {
      if($('.selectpicker').length !== 0){
          $('.selectpicker').selectpicker();
      }
  }
}
