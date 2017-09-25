import {NewSite} from '../model/newsite.interface';
import {InjectionError} from "@angular/core/src/di/reflective_errors";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class SiteService {

    private AddSite: string = 'http://192.168.200.72:4200/api/sites';
    private GET: string = 'http://192.168.200.72:4200/api/sites';
    private Delete: string = 'http://192.168.200.72:4200/api/sites/';

    constructor(private http: Http) {
    }

    private Site: NewSite[] = [
        ['1', 'englishpack1', '../assets/img/angular2-logo.png'],
        ['2', 'frenchpack', '../assets/img/bg-pricing.png'],
        ['3', 'russianpack', 'russian'],
        ['4', 'latinpack', 'latin'],
        ['5', 'chinesepack', 'chinese']
    ];

    getAllSite(): Observable<any> {
        return this.http.get(this.GET).map((res: Response) => res.json());
    }

    AddNewSite(formdata): Observable<any> {
        return this.http.post(this.AddSite, formdata)
            .map((response: Response) => response.json());
    }

    editsite(formdata, id): Observable<any> {

        return this.http.put(this.AddSite + '/' + id, formdata)
            .map((response: Response) => response.json());
    }

    deletesite(index) {

        return this.http.delete(this.Delete + index).map((response: Response) => response.json());
    }

}



