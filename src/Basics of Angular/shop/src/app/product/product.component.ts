import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = 'Ürün Listesi';
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
  ];

  ngOnInit(): void {}
}