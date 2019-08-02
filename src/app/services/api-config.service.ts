import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {apiUrl} from './apiUrl';
import { Observable } from 'rxjs';
import { Addresses } from '../model/Addresses';


@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(public http: HttpClient) { }

  getAddresses(page = 1, search = '') {
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
