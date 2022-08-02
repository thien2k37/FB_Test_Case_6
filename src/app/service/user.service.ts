import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

const API_URL = environment.apiUrl + "users"
const ID = localStorage.getItem('ID')
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  showAllUser() :Observable<any> {
    return this.httpClient.get(API_URL)
  }
  findById() : Observable<User> {
    return this.httpClient.get<User>(API_URL + `/` + ID)
  }
  changePass(id: any, user: User): Observable<User> {
    console.log(API_URL + `/users/${id}`);
    return this.httpClient.put<User>(API_URL + `/${id}` , user)
  }
  updateUserProfile(user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL + `/updateProfile/` + ID, user);
  }

}
