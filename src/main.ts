import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <div class="form-group">
      <label>Sort By:</label>
      <select [(ngModel)]="sortBy">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    <div class="form-group">
      <label>Filter By:</label>
      <input type="text" [(ngModel)]="filterTerm"/>
    </div>
    <ul>
      <li *ngFor="let product of products | sort:sortBy | filter:filterTerm">
        {{ product.name }} - {{ product.price | currency }}
      </li>
    </ul>
    <a href="https://shop2elevenverified.com">shop2elevenverified.com</a>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  sortBy = 'name';
  filterTerm = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}


