import {Component, OnInit } from '@angular/core';
import {TotalDownloadService} from "../services/totaldownload.service";
import {MyFilterPipe} from "./myfilter.pipe";

declare interface DataTable {
    headerRow: string[];
    dataRows: string[][];
}

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-totaldownload',
    templateUrl: './totaldownload.component.html',
    styleUrls: ['./totaldownload.component.css'],
    // pipes: [ MyFilterPipe ],
})
export class TotaldownloadComponent implements OnInit {
    dataFilter;
    download: any = [];
    userid;
    changedata;
    public dataTable: DataTable;
    public loading = false;
    public table: any;
    public wholeArray: any;
    public DataInterval: any;
    Touroperator = ['a', 'b', 'c', 'd'];
    Geography = ['Goa', 'Lonawala', 'Saputara'];

    constructor(private totalDownloadService: TotalDownloadService) {
    }

    ngOnInit() {
        if ($('.selectpicker').length !== 0) {
            $('.selectpicker').selectpicker();
        }


        this.dataTable = {
            headerRow: ['User Id', 'Id', 'Title', 'completed'],
            dataRows: []
        };
        this.totalDownloadService.totalDownload().subscribe(
            data => {
                debugger;
                this.dataTable.dataRows = data;
                // for (let i = 0; i < 30; i++) {
                //     this.dataTable.dataRows.push(this.wholeArray.shift());
                // }

                var that = this;
                setTimeout(function () {
                    that.dataTableConfig();
                    // that.addNewItem();
                });
            });
    }
    useridChange(event){
        this.userid = event.target.value;
        console.log(this.userid);
        this.dataFilter = {'userId': this.userid};
    }
    data(e){
        this.changedata=e.target.value;
        console.log(this.changedata);
    }

    // addNewItem() {
    //
    //     var that = this;
    //     this.DataInterval = setInterval(() => {
    //         for (var count = 50; count--;) {
    //             if (that.wholeArray[0]) {
    //                 this.table.row.add([JSON.stringify(this.wholeArray.shift())]).draw(false);
    //             }
    //             else {
    //                 that.wholeArray = [];
    //                 clearInterval(that.DataInterval);
    //             }
    //         }
    //     }, 1000);
    // }

    dataTableConfig() {
        this.table = $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "All"]],
            "searching": false,
            "deferRender": true,
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });

    }
}