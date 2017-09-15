import {User} from '../model/user.interface';
import {Http,Response , Headers} from '@angular/http';
import { XHRBackend } from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


const LOGIN_API: string ='http://192.168.200.59:3000/adminLogin';

@Injectable()
export class  LoginService {
  constructor(private http:Http){

  }

  private setHeaders(): Headers {
    const token = JSON.parse(localStorage.User).token;
    const headersConfig = {
      'Accept':'application/json',
      'authorization': token
    };
    return new Headers(headersConfig);
  }

  dashboard (){

    return this.http.get("http://localhost:3000/protected" , {headers : this.setHeaders()});
  }

  login(admin:User): Observable<any>{
    return this.http
      .post(`${LOGIN_API}`, admin)
      .map((response:Response)=>{
      localStorage.setItem('token', JSON.stringify(response.json().token));
      return response.json();
      });
  }
}
