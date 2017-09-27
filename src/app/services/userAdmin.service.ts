import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../environments/environment";

@Injectable()
export class  UserAdminService {
    constructor(private http: Http) {

    }
    AddUserData(userdata) {
       // console.log('service', userdata);
        return this.http.post(`${environment.baseURL}${environment.userAdmin}`, userdata, {}).map((response: Response) => response.json());
    }
    GetUserData() {
        return this.http.get(`${environment.baseURL}${environment.userAdmin}`,{}).map((response: Response) => response.json());
    }
    DeleteUserData(id) {
        return this.http.delete(`${environment.baseURL}${environment.userAdmin}` + '/' + id,{}).map((response: Response) => response.json());
    }
    EditUserData(userdata,id) {
        return this.http.put(`${environment.baseURL}${environment.userAdmin}` + '/' + id, userdata,{}).map((response: Response) => response.json());
    }
}
