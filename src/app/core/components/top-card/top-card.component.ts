import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit {

  @Input() title!: string;
  @Input() value!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
}
