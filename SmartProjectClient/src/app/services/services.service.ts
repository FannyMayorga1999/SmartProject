import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(environment.apiUrl + url);
  }

  post(url: string, data: any) {
    return this.http.post(environment.apiUrl + url, data);
  }


  put(url: string, data: any) {
    return this.http.put(environment.apiUrl + url, data);
  }

  delete(url: string, data: any) {
    return this.http.delete(environment.apiUrl + url, data);
  }
}
