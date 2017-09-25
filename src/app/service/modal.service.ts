import {Injectable} from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';

@Injectable()
export class ModalService {
    constructor(private dialogService: DialogService) {
    }

    open(component, data) {
        return this.dialogService.addDialog(component, data, {backdropColor: 'rgba(0, 0, 0, 0.5)', closeByClickingOutside: true})
            .map((data)=>{
                document.getElementsByTagName('body')[0].classList.remove('modal-open');
                return data;
            });
    }



}
