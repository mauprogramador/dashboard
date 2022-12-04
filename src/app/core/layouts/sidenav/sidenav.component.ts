import { Component, EventEmitter, Output } from '@angular/core';
import { Periods, Products, Stores } from '../../models/enums';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

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
}
