import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.css']
})
export class ItemListarComponent implements OnInit {
  @Input() item:string;
  constructor() { }

  ngOnInit(): void {
  }

}
