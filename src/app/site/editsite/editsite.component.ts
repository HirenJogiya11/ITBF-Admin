import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {SiteService} from "../../service/site.service";
import {ToastrService} from "toastr-ng2";

export interface Model {
    title: string ;
    data: any ;
}

@Component({
    selector: 'app-editsite',
    templateUrl: './editsite.component.html',
    styleUrls: ['./editsite.component.css']
})
export class EditsiteComponent extends DialogComponent<Model, any> implements OnInit {

    coverimage: any;
    data: any;
    result: any;
    imageName: any;
    public imagepath: string = 'http://192.168.200.72:4200';
    formdata: FormData;
    image: any;

    constructor(private dialogservice: DialogService,
                private Siteservice: SiteService ,
                private  toastrService: ToastrService) {
        super(dialogservice);
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
       // console.log('edit ', this.data);
    }


    getimage($event): void {

        this.data.image = $event.target.files[0];
        this.readThis($event.target);
        this.image = this.data.image.type.toString();
        this.image = this.image.slice(0, 5).toString();
        if (this.image === 'image') {
            this.readThis($event.target);
        } else {
            this.toastrService.error('Please, Select valid Image file');
        }
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
       // console.log(file);
        myReader.onloadend = (e) => {
            this.result = myReader.result;
            // Base64 data console.log(this.result);
            this.imageName = file.name;
            // image Name  console.log(this.imageName);
        };
        myReader.readAsDataURL(file);
    }


    save() {
        this.formdata = new FormData();
        this.formdata.append('name', this.data.name);
        this.formdata.append('image', this.data.image, this.data.image.name)
        this.Siteservice.editsite(this.formdata , this.data._id)
            .subscribe(data => {
                   // console.log('save', data);
                    this.toastrService.success( 'Your Site has been Update Successfully' );
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
