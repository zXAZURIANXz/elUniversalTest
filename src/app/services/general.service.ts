import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public http: HttpClient) {
  }

  apiUrl = 'https://api.eluniversal.com.mx/v1/notes/eluniversal/mxm/json/minutebyminute';

  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
