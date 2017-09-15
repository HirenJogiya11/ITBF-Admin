import {Component, OnInit} from '@angular/core';
import {PackService} from '../service/pack.service';
import {ModalService} from '../service/modal.service';
import {Pack} from '../model/pack.interface';
import {AddpackmodalComponent} from './addpackmodal/addpackmodal.component';
import {NewaudiopackComponent} from './newaudiopack/newaudiopack.component';
import {TotalaudioComponent} from './totalaudio/totalaudio.component';
import {EditaudioComponent} from "./editaudio/editaudio.component";

@Component({
    selector: 'app-packs',
    templateUrl: './packs.component.html',
    styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

    packs: Pack[];
    // engcounter: number = 0;
    // frenchcounter: number = 0;
    // russiancounter: number;
    // latincounter: number;
    // chinesecounter: number;


    constructor(private packservice: PackService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.getpacks();
    }

    getpacks() {
        this.packs = this.packservice.getPack();

        // this.packs.forEach((o) => {
        //     if (o.language === 'english') {
        //         this.engcounter += 1;
        //     }
        //     if (o.language === 'french') {
        //         this.frenchcounter++;
        //     }
        //     if (o.language === 'russian') {
        //         this.russiancounter++;
        //     }
        //     if (o.language === 'latin') {
        //         this.latincounter++;
        //     }
        //     if (o.language === 'chinese') {
        //         this.chinesecounter++;
        //     }
        // })
    }

    add() {
        this.modalService.open(AddpackmodalComponent, null)
            .subscribe((data) => {

            });
    }

    Newaudio(pack) {
        this.modalService.open(NewaudiopackComponent, {title: '', data: pack})
            .subscribe((data) => {

            });
    }

    TotalAudio(pack) {
        this.modalService.open(TotalaudioComponent, {title: '', data: pack})
            .subscribe((data) => {
            });
    }

    EditAudio() {
        this.modalService.open(EditaudioComponent , null);
    }
}

