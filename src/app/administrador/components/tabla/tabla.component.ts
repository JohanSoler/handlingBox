import { Component, OnInit } from '@angular/core';
import { Fila } from '../../interface/fila.interface';
import { TableService } from '../../services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { CambiarEstadoComponent } from "../funciones/emergentes/cambiar-estado/cambiar-estado.component";
import { DetallesComponent } from "../funciones/emergentes/detalles/detalles.component";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  tabla: Fila[];
  constructor(private _tableService: TableService,
              public dialog: MatDialog) {
    this.tabla = _tableService.tabla;
  }

  editar(fila:Fila){
    this._tableService.seleccion = fila;
    const dialogRef = this.dialog.open(CambiarEstadoComponent);

    dialogRef.afterClosed().subscribe(async result => {
      let filaTemp = this._tableService.seleccion;

      await this._tableService.updateRow(filaTemp);

    });
  }

  eliminar(fila:Fila){
    this._tableService.seleccion = fila;
    const dialogRef = this.dialog.open(DetallesComponent);

    dialogRef.afterClosed().subscribe(result => {
      this._tableService.removeRow(fila);
    });
  }

  ngOnInit(): void {
  }

}   
