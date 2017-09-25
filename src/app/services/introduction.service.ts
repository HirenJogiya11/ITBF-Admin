import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
const addintroductionurl: string = 'http://192.168.200.72:4200/addIntroductionData';
const getintroductionurl: string = 'http://192.168.200.72:4200/getIntroductionData';
const addCSVFile: string = 'http://192.168.200.72:4200/api/user/bulkUpload';

@Injectable()
export class  IntroductionService {
    constructor(private http: Http) {

    }
    addIntroductionData(introduction: FormData) {
        return this.http.post(addintroductionurl, introduction, {}).map((response: Response) => response.json());
    }
    getIntroductionData() {
        return this.http.get(getintroductionurl, {}).map((response: Response) => response.json());
    }
    addCsvFile(data) {
        return this.http.post(addCSVFile, data, {}).map((response: Response) => response.json());
    }
}
