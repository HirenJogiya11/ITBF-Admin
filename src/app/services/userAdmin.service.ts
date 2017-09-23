import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
const adduserurl: string = 'http://192.168.200.72:4200/api/user';
const getintroductionurl: string = 'http://192.168.200.72:4200/getIntroductionData';

@Injectable()
export class  UserAdminService {
    constructor(private http: Http) {

    }
    AddUserData(userdata) {
        console.log('service', userdata);
        return this.http.post(adduserurl, userdata, {}).map((response: Response) => response.json());
    }
    GetUserData() {
        return this.http.get(adduserurl,{}).map((response: Response) => response.json());
    }
    DeleteUserData(id) {
        return this.http.delete(adduserurl + '/' + id,{}).map((response: Response) => response.json());
    }
    EditUserData(userdata,id) {
        return this.http.put(adduserurl + '/' + id, userdata,{}).map((response: Response) => response.json());
    }
}
