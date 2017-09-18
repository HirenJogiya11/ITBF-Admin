import {Component, OnInit} from '@angular/core';
import {PackService} from '../service/pack.service';
import {ModalService} from '../service/modal.service';
import {Pack} from '../model/pack.interface';
import {AddpackmodalComponent} from './addpackmodal/addpackmodal.component';
import {NewaudiopackComponent} from './newaudiopack/newaudiopack.component';
import {TotalaudioComponent} from './totalaudio/totalaudio.component';

@Component({
    selector: 'app-packs',
    templateUrl: './packs.component.html',
    styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {
    packList = [];
    counter = 1;
    packs: Pack[];
    sites: any;
    engcounter: Number = 0;
    frenchcounter: number = 0;
    russiancounter: number = 0;
    latincounter: number = 0;
    chinesecounter: number = 0;


    constructor(private packservice: PackService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.getpacks();
    }

    getpacks() {
        this.packs = this.packservice.getPack();
        this.sites = this.packservice.getsites();

        console.log(this.sites);
        // this.sites.forEach((o) =>
        for (let i = 0; i < this.packs.length; i++) {
            for (let j = 0; j < this.sites.length; j++) {

                if (this.sites[j].language === this.packs[i].language && this.sites[j].packname === this.packs[i].packname) {
                    if (this.sites[j].packname === this.packs[i].packname) {
                        this.packList[this.packs[i].packname] = [];
                        this.packList[this.packs[i].packname].push(this.sites[j]);
                        // console.log(this.packList);
                        // this.packList.forEach((o) => {
                        //     if (o === this.packs[i].packname) {
                        //         debugger
                        //         this.counter += 1;
                        //         this.packList[o] = this.counter;
                        //         console.log('repeat', this.packList);
                        //     }
                        // });
                    }

                }
            }
          console.log('something', this.packList[this.packs[i].packname]);
        }
        console.log(this.engcounter);
        console.log(this.frenchcounter);
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
}

