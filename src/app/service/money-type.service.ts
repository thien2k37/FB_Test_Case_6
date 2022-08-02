import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = environment.apiUrl + "money-types"

@Injectable({
  providedIn: 'root'
})
export class MoneyTypeService {

  constructor(private httpClient: HttpClient) {
  }

  showAll(): Observable<any> {
    return this.httpClient.get(API_URL);
  }
}

