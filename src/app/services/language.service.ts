import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../environments/environment";
const url: string =  `${environment.baseURL}${environment.language}`;
@Injectable()
export class  LanguageService {
    constructor(private http: Http) {

    }
    AddLanguage(languageData) {
        console.log('service', languageData);
        return this.http.post(url, languageData, {}).map((response: Response) => response.json());
    }
    GetLanguage() {
        return this.http.get(url,{}).map((response: Response) => response.json());
    }
    DeleteLanguage(id) {
        return this.http.delete(url + '/' + id,{}).map((response: Response) => response.json());
    }
    EditLanguage(languageData, id) {
        return this.http.put(url + '/' + id, languageData,{}).map((response: Response) => response.json());
    }
}
