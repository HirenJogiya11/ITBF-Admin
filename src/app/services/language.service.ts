import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
const addLanguageurl: string = ' http://192.168.200.72:4200/api/language';

@Injectable()
export class  LanguageService {
    constructor(private http: Http) {

    }
    AddLanguage(languageData) {
        console.log('service', languageData);
        return this.http.post(addLanguageurl, languageData, {}).map((response: Response) => response.json());
    }
    GetLanguage() {
        return this.http.get(addLanguageurl,{}).map((response: Response) => response.json());
    }
    DeleteLanguage(id) {
        return this.http.delete(addLanguageurl + '/' + id,{}).map((response: Response) => response.json());
    }
    EditLanguage(languageData, id) {
        return this.http.put(addLanguageurl + '/' + id, languageData,{}).map((response: Response) => response.json());
    }
}
