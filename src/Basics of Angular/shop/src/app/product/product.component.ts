import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { from } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addToCart(product) {
    this.alertifyService.warning(product.name + ' Eklendi 🎈🎆🎇✨🎉');
  }
}
/**
 * {
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
 */
