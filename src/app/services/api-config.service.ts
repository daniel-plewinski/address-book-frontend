import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private url = 'http://192.168.99.100:8000/api';

  constructor(public http: HttpClient) { }

  getAddresses(page: number, search: string) {
    return this.http.get(`${this.url}/addresses?page=${page}&search=${search}`)
      .map((response: Response) => {
        return response;
      });
  }

  newAddress(data: any) {
    return this.http.post(`${this.url}/addresses`, data)
      .map((response: Response) => {
        return response;
      });
  }
}
