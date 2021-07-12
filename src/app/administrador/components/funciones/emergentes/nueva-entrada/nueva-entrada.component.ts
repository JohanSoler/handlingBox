import { Component, OnInit } from '@angular/core';
import { Fila } from 'src/app/administrador/interface/fila.interface';
import { TableService } from '../../../../services/table.service';

interface tempFile {
  description: String,
  amount: number,
  status: String,
  date: Date
}

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.component.html',
  styleUrls: ['./nueva-entrada.component.css']
})
export class NuevaEntradaComponent implements OnInit {

  fila: tempFile;
  mensual: Boolean;
  constructor(private _tableService:TableService) { 
    this.mensual = false;
    this.fila = {
      description: "",
      amount: 0,
      status: "",
      date: new Date
    }
  }

  ngOnInit(): void {
  }

  guardar(){
    
    let fila: Fila = {
      description: this.fila.description,
      amount: this.fila.amount,
      status: this.fila.status,
      date: `${this.fila.date.getDate()}/${this.fila.date.getMonth()+1}/${this.fila.date.getFullYear()}`
    }
    console.log(this.mensual);
    if(this.mensual){
      fila.date = "Mensual";
    }

    this._tableService.postAccount(fila);
  }
}
