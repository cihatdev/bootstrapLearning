import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<p>{{ name }} !</p> `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  name = 'Laptop';
  ngOnInit(): void {}
}
