import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged : boolean = false;

  constructor(private http: HttpClient) { }

  registerUser( usuario: string, password: string){
    const url = "http://localhost:5000/register";
    return this.http.post<UserInterface>(url,{usuario, password});
  }
  login(usuario: string, password: string) :Observable<any>{
    const url = "http://localhost:5000/login";
    return this.http.post(url, {usuario, password});
  }

  setUser( user){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  setToken(token){
    localStorage.setItem("accessToken", token);
  }
  getToken(){
    return localStorage.getItem("accessToken");
  }
  geCurrenttUser(){
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }
    else{
      return null;
    }
  }
  logoutUser(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }

  changePassword(datos){
    const token = this.getToken();
    const url = `http://localhost:5000/user?token=${token}`;
    return this.http.put(url,datos);
  }

  onCheckUser(){
    if(this.getToken() === null){
      this.isLogged = false;
      return false;
    }
    else{
      this.isLogged = true;
      return true;
    }
  }
}
