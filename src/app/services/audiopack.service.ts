

import {Http , Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";


const REGISTER: string = 'http://localhost:3000/file/upload';
const AudioPack: string ='http://localhost:3000/protected/audiopack/';
@Injectable()
export class AudiopackService {
  token: string
  constructor(private http: Http) {
    this.token = JSON.parse(localStorage.User).token;
  }


  private setHeaders(): Headers {
    const headersConfig = {
      'Accept':'application/json',
      'Content-Type':'multipart/form-data',
      'authorization': this.token
    };
    return new Headers(headersConfig);
  }

  getAudioPack(): Observable<any> {
    return this.http
      .get(AudioPack, {headers: this.setHeaders()});
  }


 addaudiopack(formdata): Observable<any> {
    return this.http.post(REGISTER , formdata)
 }

}



// this.http.post(`${this.apiEndPoint}`, formData, options)
// //       .map(res => res.json())
// //       .catch(error => Observable.throw(error))
// //       .subscribe(
// //         data => console.log('success'),
// //         error => console.log(error)
// //       )
