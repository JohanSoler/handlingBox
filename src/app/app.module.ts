import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutentificacionPageComponent } from './autentificacion/pages/autentificacion-page/autentificacion-page.component';
import { AdministradorPageComponent } from './administrador/pages/administrador-page/administrador-page.component';
import { InputComponent } from './autentificacion/components/input/input.component';
import { ScrollComponent } from './autentificacion/components/scroll/scroll.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SaldoComponent } from './administrador/components/saldo/saldo.component';
import { TablaComponent } from './administrador/components/tabla/tabla.component';
import { FuncionesComponent } from './administrador/components/funciones/funciones.component';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AutentificacionPageComponent,
    AdministradorPageComponent,
    InputComponent,
    ScrollComponent,
    SaldoComponent,
    TablaComponent,
    FuncionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
