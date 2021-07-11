import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private _apiUrl: String = 'https://handlingboxback.herokuapp.com';
  public _user: User;

  get user(){
    return {...this._user};
  }

  constructor() { 
    this._user = {
      user: "",
      password: ""
    }
  }
}
