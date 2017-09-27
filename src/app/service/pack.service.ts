import {Pack} from '../model/pack.interface';
import {Site} from '../model/site.interface';
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";


@Injectable()
export class PackService {
    constructor(private http: Http) {
    }

    private REGISTER: string = `${environment.baseURL}${environment.pack}`;
    private GET: string = `${environment.baseURL}${environment.pack}`;
    private NewSite: string = `${environment.baseURL}${environment.pack}` + '/addSite';
    private EditPack: string = `${environment.baseURL}${environment.pack}`;
    private Delete: string = `${environment.baseURL}${environment.pack}` + '/';
    private GetLanguage: string = `${environment.baseURL}${environment.language}`;
    private EditSite: string = `${environment.baseURL}${environment.pack}` + '/updateSite';
    private DeleteSite: string = `${environment.baseURL}${environment.pack}` + '/deleteSite/'

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
        return this.http.put(this.EditSite, formdata).map((res: Response) => res.json());
    }

    deletepack(id) {
        return this.http.delete(this.Delete + id).map((response: Response) => response.json());
    }

    deletesite(packid, siteid) {
        //debugger;
        return this.http.delete(this.DeleteSite + packid + '/' + siteid).map((response: Response) => response.json());
    }


}