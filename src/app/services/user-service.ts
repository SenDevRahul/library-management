import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   

  constructor(private http: HttpClient){

  }

  userLogin(user: User){
    const url=environment.apiBaseUrl+"/user/login";
    return this.http.post(url,user);
  }
}
