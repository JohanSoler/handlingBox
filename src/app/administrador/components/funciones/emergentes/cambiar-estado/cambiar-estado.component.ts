import { Component, OnInit } from '@angular/core';
import { Fila } from 'src/app/administrador/interface/fila.interface';
import { TableService } from 'src/app/administrador/services/table.service';

interface tempFile {
  _id?: String,
  description: String,
  amount: number,
  status: String,
  date?: Date
}

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.css']
})
export class CambiarEstadoComponent implements OnInit {

  fila: tempFile;
  filaService: Fila;
  mensual: Boolean;
  constructor(private _tableService:TableService) { 
    this.filaService = _tableService.seleccion;
    this.mensual = false;
    this.fila = {
      _id: this.filaService._id,
      description: `${this.filaService.description}`,
      amount: this.filaService.amount,
      status: this.filaService.status,
      date: new Date
    }
    console.log(this.fila._id);
  }
  ngOnInit(): void {
    
  }

  Actualizar(){
    let filaF: Fila = {
      _id: this.fila._id,
      description: this.fila.description,
      amount: this.fila.amount,
      status: this.fila.status,
      date: `${this.fila.date?.getDate()}/${this.fila.date?.getMonth()!+1}/${this.fila.date?.getFullYear()}`
    }
    if(this.mensual){
      filaF.date = "Mensual";
    }

    this._tableService.updateRow(filaF);

  }

}
