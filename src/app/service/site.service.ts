import {NewSite} from '../model/newsite.interface';
import {InjectionError} from "@angular/core/src/di/reflective_errors";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";


@Injectable()
export class SiteService {

    private AddSite: string = `${environment.baseURL}${environment.site}`;
    private GET: string = `${environment.baseURL}${environment.site}`;
    private Delete: string =  `${environment.baseURL}${environment.site}` + '/';

    constructor(private http: Http) {
    }


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



