import { Component, EventEmitter, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Periods, Products, Stores } from '../../models/enums';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  execText: string = 'Executando';
  btnText: string = 'Encerrar';
  btnIcon: string = 'stop';
  status: boolean = false;

  @Output() period = new EventEmitter<Periods>();

  @Output() store = new EventEmitter<Stores>();

  @Output() product = new EventEmitter<Products>();


  setPeriod(period: string) {
    this.period.emit(period as Periods);
  }

  setStore(store: string) {
    this.store.emit(store as Stores);
  }

  setProduct(product: string) {
    this.product.emit(product as Products);
  }


  turnButton() {
    if (this.status) {
      this.status = false;
      this.mode = 'indeterminate';
      this.color = 'warn';
      this.execText = 'Executando';
      this.btnText = 'Encerrar';
      this.btnIcon = 'stop';
    } else {
      this.status = true;
      this.mode = 'determinate';
      this.color = 'primary';
      this.execText = 'Encerrado';
      this.btnText = 'Iniciar';
      this.btnIcon = 'play_arrow';
    }
  }
}
