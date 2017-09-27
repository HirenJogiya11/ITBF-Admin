import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'toastr-ng2';
import {IntroductionService} from '../services/introduction.service';
declare var $: any;
@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {
    button:boolean;
    result:any;
    res: any;
    filename:string;
    csvType:string;
    csvFile:any = [];
    formdata: FormData;
    constructor( private toastrService: ToastrService, private introductionservice: IntroductionService) { }

    ngOnInit() {

    }
    onChange($event):void {
        this.csvFile = $event.target.files[0];
        this.csvType = this.csvFile.type.toString();
        if(this.csvType === 'text/csv') {
            this.res = event.srcElement;
            this.filename = this.res.files[0].name;
        }
        else
        {
            this.toastrService.error('Please, Select valid CSV file');
        }
        if(this.filename) {
            this.button = true;
        }
    }
    removeCsv(){
        this.filename = null;
        this.button = false;
    }

    save() {
         const id = localStorage.getItem('id');
        this.formdata = new FormData();
        this.formdata.append('csv', this.csvFile, this.filename);
        this.formdata.append('id', id);
        this.introductionservice.addCsvFile(this.formdata)
            .subscribe(data => {
                    console.log('save', data);
                },
                err => {
                    console.log('Error', err);
                });
        this.toastrService.success('Successfully File Uploaded ');
        this.filename = null;
        this.button = false;
    }
}