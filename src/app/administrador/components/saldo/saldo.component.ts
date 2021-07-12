import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  saldo: number = 0;
  constructor(private _tablaService: TableService) { 
    setInterval(()=>{
      this.updateSum();
    }, 500);
  }

  updateSum(){
    this.saldo=this._tablaService.suma;
  }

  ngOnInit(): void {
  }

}
