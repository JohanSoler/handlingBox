import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../interface/table.interface';
import { AutentificacionService } from '../../autentificacion/services/autentificacion.service';
import { Fila } from '../interface/fila.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _apiUrl: String = 'https://handlingboxback.herokuapp.com';
  tabla: Fila[];
  tablaInicial: Fila[];
  seleccion: Fila;
  _tabla: Table;
  mes: number;
  suma: number;
  constructor(private http:HttpClient,
              private _autentificacionService: AutentificacionService) {
    this.tabla = [];
    this.tablaInicial = [];
    this._tabla = {
      account: []
    };
    let date = new Date;
    this.mes = date.getMonth()+1;
    this.suma = 0;
    this.seleccion = {
      description: "",
      amount: 0,
      date: "",
      status: ""
    }
    this.initTable();
  }

  cambiarMes(mes: number){
    this.mes = mes;
    this.tabla = [];
    this.initTable();
    this.filtrar();
  }

  filtrar(){
    let sumaTemp = 0;
    let data: Fila[] = [];
    this.tabla.forEach(element => {
      let temp = element.date.split('/');
      if(temp.length==1){
        data.push(element);
        sumaTemp += element.amount;
      }else if(this.mes == 13){
        data.push(element);
        sumaTemp += element.amount;
      }else if(this.mes == 14){
        if(temp.length == 1){
          data.push(element);
          sumaTemp += element.amount;
        }
      }else if(temp[1]==`${this.mes}`){
        data.push(element);
        sumaTemp += element.amount;
      }
    });
    this.suma = sumaTemp;
    this.tabla = data;
  }

  async initTable(){
    await this.http.get<Table[]>(`${this._apiUrl}/information/${this._autentificacionService.user.information}`).subscribe(
      (res) => {
        this._tabla = res[0];
        this.searchRow(res[0].account);
      }
    );
  }

  async searchRow(tabla: any){
    tabla.forEach(async (element: String) => {
      await this.http.get<Fila[]>(`${this._apiUrl}/account/${element}`).subscribe(
        (res) => {
          this.tabla.push(res[0]);
          this.tablaInicial.push(res[0]);
        }
      );
    });
  }


  async postAccount(fila: Fila){
    await this.http.post<Fila>(`${this._apiUrl}/account`,fila).subscribe(
      async (res) => {
        this._tabla.account.push(`${res._id}`);
        await this.http.patch<Table>(`${this._apiUrl}/information/${this._autentificacionService.user.information}`,this._tabla).subscribe(
          (res) => {
            this.getRow(res.account);
          }
        );
      }
    );
  }

  async getRow(tabla: any[]) {
    let id = tabla[(tabla.length-1)];
    this.http.get<Fila[]>(`${this._apiUrl}/account/${id}`).subscribe(
      (res) => {
        let row: Fila ={
          _id: res[0]._id,
          description: res[0].description,
          amount: res[0].amount,
          date: res[0].date,
          status: res[0].status
        }
        this.tabla.push(row);
        console.log(res);
      });
  }

  async removeRow(fila:Fila){
    var i = this._tabla.account.indexOf(`${fila._id}`);
    if( i !== -1){
      this._tabla.account.splice(i, 1);
    }

    var j = this.tabla.indexOf(fila);
    if(j !== -1){
      this.tabla.splice(i, 1);
    }

    this.http.patch<Table>(`${this._apiUrl}/information/${this._autentificacionService.user.information}`,this._tabla).subscribe(
      (res) => {
        this.http.delete(`${this._apiUrl}/account/${fila._id}`).subscribe(
          (res) => {
            console.log(res);
          }
        );
      }
    );
  }

  async updateRow(fila:Fila){
    let tempFila: Fila = {
      description: fila.description,
      amount: fila.amount,
      status: fila.status,
      date: fila.date
    }
    return await this.http.patch<Fila>(`${this._apiUrl}/account/${fila._id}`,tempFila).subscribe(
      (res) => {
        console.log(res);
        this.tabla = [];
        this.initTable();
      }
    );
  }

}
