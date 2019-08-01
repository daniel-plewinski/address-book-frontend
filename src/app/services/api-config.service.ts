import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {apiUrl} from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(public http: HttpClient) { }

  getAddresses(page: number, search: string) {
    return this.http.get(`${apiUrl}/api/addresses?page=${page}&search=${search}`)
      .map((response: Response) => {
        return response;
      });
  }

  newAddress(data: any) {

    return this.http.post(`${apiUrl}/api/addresses`, data)
      .map((response: Response) => {
        return response;
      });
  }
}
