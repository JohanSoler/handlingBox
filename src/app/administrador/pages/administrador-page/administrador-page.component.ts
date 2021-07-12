import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../../../autentificacion/services/autentificacion.service';

@Component({
  selector: 'app-administrador-page',
  templateUrl: './administrador-page.component.html',
  styleUrls: ['./administrador-page.component.css']
})
export class AdministradorPageComponent implements OnInit {

  constructor(private _autentificacionService: AutentificacionService) { }

  ngOnInit(): void {
  }

  deslogear(){
    this._autentificacionService.desloguear();
  }

}
