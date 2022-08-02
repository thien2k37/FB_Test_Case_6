import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wallet} from "../model/wallet";

const API_URL = environment.apiUrl + "wallets"
const ID = localStorage.getItem('ID');
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient : HttpClient) { }

  findAllByStatusPublic() :Observable<any> {
    return this.httpClient.get(API_URL + `?id=` + ID)
  }

  findAllByStatusPrivate() :Observable<any> {
    return this.httpClient.get(API_URL + `/history/` + ID)
  }

  findAllByNameContaining(name : string) :Observable<any> {
    return this.httpClient.get(API_URL + `/find-by-name?name=` + name)
  }

    findById(id : string) :Observable<any> {
    return this.httpClient.get(API_URL + `/${id}`)
  }

  save(wallet:Wallet){
    return this.httpClient.post<Wallet>(API_URL ,wallet);
  }

  delete(id : string): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(API_URL + `/delete/${id}`)
  }

  update(id:any, wallet:any) : Observable<any> {
    return this.httpClient.put(API_URL + `/update/${id}`, wallet)
  }
}
