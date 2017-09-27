import {User} from '../model/user.interface';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {XHRBackend} from '@angular/http';
import 'rxjs/Rx';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

const USER: string = 'http://localhost:3000/protected/user/';
const REGISTER: string = 'http://localhost:3000/user/signup';

@Injectable()
export class UserService {
  token: string

  constructor(private http: Http) {
    this.token = JSON.parse(localStorage.User).token;
  }

  private setHeaders(): Headers {
    const headersConfig = {
      'Accept':'application/json',
      'authorization': this.token
    };
    return new Headers(headersConfig);
  }

  getUser(): Observable<any> {
    return this.http
      .get(USER, {headers: this.setHeaders()});
  }


  register(user: User): Observable<any> {
    // console.log(user);
    return this.http.post(REGISTER, user);
  }
}
