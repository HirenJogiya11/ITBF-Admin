import {Pack} from '../model/pack.interface';
import {Site} from '../model/site.interface';
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PackService {
    constructor(private http: Http) {
    }


    private packs = [
        ['englishpack', 'english'],
        ['englishpack1', 'english'],
        ['frenchpack', 'french'],
        ['russianpack', 'russian'],
        ['latinpack', 'latin'],
        ['chinesepack', 'chinese']
    ];

    private sites: Site[] = [
        new Site('1', {siteid: '1', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
        new Site('2', {siteid: '2', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
        new Site('3', {siteid: '3', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
        new Site('4', {siteid: '4', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
        new Site('5', {siteid: '5', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
        new Site('6', {siteid: '6', imagefile: 'image1', footstepfile: 'image1', audiofile: 'audio1'}),
    ];

    private REGISTER: string = 'http://192.168.200.72:4200/api/pack';
    private GET: string = 'http://192.168.200.72:4200/api/pack';
    private NewSite: string = 'http://192.168.200.72:4200/api/pack/addSite';
    private EditPack: string = 'http://192.168.200.72:4200/api/pack';
    private Delete: string = 'http://192.168.200.72:4200/api/pack/';
    private GetLanguage: string = 'http://192.168.200.72:4200/api/language';
    private EditSite: string = 'http://localhost:3000/api/pack/updateSite'

    getPack(): Observable<any> {
        return this.http.get(this.GET).map((res: Response) => res.json());
    }

    getLanguage(): Observable<any> {
        return this.http.get(this.GetLanguage).map((res: Response) => res.json());
    }

    addaudiopack(pack): Observable<any> {
        return this.http.post(this.REGISTER, pack).map((res: Response) => res.json());
    }

    EditAudio(pack): Observable<any> {
        return this.http.put(this.EditPack + '/' + pack._id, pack).map((res: Response) => res.json());
    }


    addnewsite(formdata) {
        return this.http.post(this.NewSite, formdata).map((res: Response) => res.json());
    }

    editSite(formdata) {
      //  debugger;
        return this.http.put(this.EditSite, formdata).map((res: Response) => res.json());
    }

    // getsites() {
    //     return this.sites.slice();
    // }

    //  getsite(name) {
    // //     return this.sites.filter((obj) => obj.packname === name);
    //  }

    deletepack(index) {
        return this.http.delete(this.Delete + index).map((response: Response) => response.json());
    }

}