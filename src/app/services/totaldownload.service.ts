import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class  TotalDownloadService {
    constructor(private http: Http) {

    }
   api: string = 'https://jsonplaceholder.typicode.com/todos';
    totalDownload(): Observable<any> {
            return this.http.get(this.api).map((response: Response) => response.json());
    }
    userid(): Observable<any> {
        return this.http.get(this.api).map((response: Response) => response.json());
    }
    datachange(): Observable<any> {
        return this.http.get(this.api).map((response: Response) => response.json());
    }
}
