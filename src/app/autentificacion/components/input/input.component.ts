import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { AutentificacionService } from '../../services/autentificacion.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  hide: Boolean;
  type: String;
  user: User;

  constructor(private _autentificationServices: AutentificacionService) {

    this.user = _autentificationServices.user;

    this.hide = true;
    this.type = "password"

  }

  autentificar(){
    this._autentificationServices.autentificar(this.user);
  }

  changeStatus(){
    if(this.hide){
      this.hide=false;
    }else {
      this.hide=true;
    }
  }

  ngOnInit(): void {
  }

}
