import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-elementos',
  templateUrl: './listado-elementos.component.html',
  styleUrls: ['./listado-elementos.component.css']
})
export class ListadoElementosComponent implements OnInit {
  items: string[];
  constructor() {
    this.items=['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5'];
  }

  ngOnInit(): void {
  }

}
