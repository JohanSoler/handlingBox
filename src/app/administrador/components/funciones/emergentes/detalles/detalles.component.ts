import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/administrador/services/table.service';
import { Fila } from '../../../../interface/fila.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  filaService: Fila;
  constructor(private _tableService:TableService) { 
    this.filaService = _tableService.seleccion;
  }

  ngOnInit(): void {
  }

  eliminar(){
    this._tableService.removeRow(this.filaService);
  }

}
