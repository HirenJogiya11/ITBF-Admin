import {Pack} from '../model/pack.interface';
import {Site} from '../model/site.interface';
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {forEach} from "@angular/router/src/utils/collection";


const packurl: string = 'http://localhost:3000/pack/addpack';
const getPack: string = 'http://localhost:3000/pack/pack/';
const addsiteurl: string = 'http://localhost:3000/pack/addsite';
@Injectable()
export class PackService {


    constructor(private http: Http) {
    }
  private  data = [];
    private counter = 1;
    private temp;
    private packs = [
        ['englishpack', 'english'],
        ['englishpack1', 'english'],
        ['frenchpack', 'french'],
        ['russianpack', 'russian'],
        ['latinpack', 'latin'],
        ['chinesepack', 'chinese']
    ];

    private sites: Site[] = [
        new Site('1', {'sitename': 'engsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('3', {'sitename': 'frenchsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('4', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('5', {'sitename': 'eng1site', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('6', {'sitename': 'latinsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('1', {'sitename': 'engsite', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('4', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('5', {'sitename': 'eng1site', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('6', {'sitename': 'latinsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('1', {'sitename': 'engsite', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('1', {'sitename': 'engsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('3', {'sitename': 'frenchsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('4', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('4', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('5', {'sitename': 'eng1site', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('6', {'sitename': 'latinsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('1', {'sitename': 'engsite', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('4', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
    ];


    getPack() {
        return this.packs.slice();
    }

    // getPack(): Observable<any> {
    //     return this.http
    //         .get(getPack).map((response: Response) => response.json());
    // }
    addaudiopack(pack) {
        return this.http.post(addsiteurl, pack);
        // this.packs.push(pack);
        // console.log(this.packs);
    }

    addnewsite(site) {
        // return this.http.post(addsiteurl, formdata).map((response: Response) => {
        //     return response.json();
        // });
         this.sites.push(site);

    }

    getsites() {
        return this.sites.slice();
    }

    getcountsite() {
        debugger;
        this.data = [];
        // return this.sites.filter((obj) => obj.packid === i.toString());
        console.log(this.sites);
        this.sites.forEach((obj) => {
            this.temp = this.data[obj.packid];
           if(this.data[obj.packid])
           {
               this.counter = this.temp + this.counter;
               this.data[obj.packid] = this.counter;
               this.counter = 1;
           }
           else{
               this.data[obj.packid] = 1;
               this.counter = 1;
           }
        });
        console.log('data', this.data);
        return this.data;
    }

    getsite(i) {
        debugger;
        return this.sites.filter((obj) => obj.packid === i.toString());
        // console.log(this.sites);
        // this.sites.forEach((obj) => {
        //    if( obj.packid=== i.toString())
        //    {
        //        debugger
        //        this.data.push(this.sites[i]);
        //    }
        // });
        // console.log('data',this.data);
        // return this.data;
    }


    deleteaudio(index) {
        debugger;
        this.sites.splice(index, 1);
        console.log('delete site is', this.sites);
    }
}