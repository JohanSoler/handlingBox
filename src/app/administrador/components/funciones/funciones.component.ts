import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CambiarEstadoComponent } from "./emergentes/cambiar-estado/cambiar-estado.component";
import { NuevaEntradaComponent } from "./emergentes/nueva-entrada/nueva-entrada.component";
import { DetallesComponent } from "./emergentes/detalles/detalles.component";
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public _tableService: TableService) { 
  }

  ngOnInit(): void {
  }

  eliminar(){
    const dialogRef = this.dialog.open(DetallesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  crearEntrada(){
    const dialogRef = this.dialog.open(NuevaEntradaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editar(){
    const dialogRef = this.dialog.open(CambiarEstadoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}