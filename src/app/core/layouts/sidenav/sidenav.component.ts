import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  private year!: string;
  private product!: string;
  private store!: string;




  setValue(year: string) {
    console.log(year);
  }
}
