import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _autentificationService:AutentificacionService,
              private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let user = this._autentificationService.user;
      console.log(user);
      if(user.user.length > 5){
        return true;
      }
    console.log("Acceso denegado por usuario no registrado");
    this._router.navigate(['./login']);
    return false;
  }
}
