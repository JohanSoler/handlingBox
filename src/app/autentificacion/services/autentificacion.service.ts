import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private _apiUrl: String = 'https://handlingboxback.herokuapp.com';
  public _user: User;

  get user(){
    return {...this._user};
  }

  constructor(private _route: Router,
              private http: HttpClient) { 
    this._user = {
      user: "",
      password: "",
      information: ""
    }
  }

  async autentificar(user:User){
    let userTemp = user.user.toUpperCase();
    if(user.user.length > 1){
      await this.http.get<User[]>(`${this._apiUrl}/user/${userTemp}`).subscribe(
        (res) => {
          if(res[0].password == user.password){
            this._user = res[0];
            this._route.navigate(['administration']);
          } else {
            console.log('Constraseña Incorrecta');
            user.password = "";
            user.user = userTemp;
          }
        }
      );
    }
  }

  desloguear(){
    let userTemp: User = {
      user: "",
      password: "",
      information: ""
    }
    this._user = userTemp;
    this._route.navigate(['login']);
  }

}
