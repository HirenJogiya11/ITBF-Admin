import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../environments/environment";

@Injectable()
export class  IntroductionService {
    constructor(private http: Http) {

    }
    addIntroductionData(introduction: FormData) {
        return this.http.post( `${environment.baseURL}${environment.addIntroduction}`, introduction, {}).map((response: Response) => response.json());
    }
    getIntroductionData() {
        return this.http.get( `${environment.baseURL}${environment.getIntroduction}`, {}).map((response: Response) => response.json());
    }
    addCsvFile(data) {
        return this.http.post( `${environment.baseURL}${environment.bulkUpload}`, data, {}).map((response: Response) => response.json());
    }
}
