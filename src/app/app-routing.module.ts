import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorPageComponent } from './administrador/pages/administrador-page/administrador-page.component';
import { AutentificacionPageComponent } from './autentificacion/pages/autentificacion-page/autentificacion-page.component';
import { AuthGuard } from './autentificacion/services/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/login'},
  {path: 'login', component: AutentificacionPageComponent},
  {path: 'administration', component: AdministradorPageComponent, canActivate: [  AuthGuard ]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
