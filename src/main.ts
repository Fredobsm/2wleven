import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <input [(ngModel)]="sortBy" placeholder="Sort By">
      <input [(ngModel)]="filterCriteria" placeholder="Filter">
    </div>
    <div *ngFor="let product of products | sort:sortBy | filter:filterCriteria">
      <h2>
        <a [routerLink]="['/product', product.id]">
          {{ product.name }}
        </a>
      </h2>
      <p>{{ product.description }}</p>
    </div>
  `,
  styleUrls: [import { Component, OnInit } from '@angular/core';
  import { Product } from '../product';
  import { ProductService } from '../product.service';
  
  @Component({
    selector: 'app-product-list',
    template: `
      <div>
        <input [(ngModel)]="sortBy" placeholder="Sort By">
        <input [(ngModel)]="filterCriteria" placeholder="Filter">
      </div>
      <div *ngFor="let product of products | sort:sortBy | filter:filterCriteria">
        <h2>
          <a [routerLink]="['/product', product.id]">
            {{ product.name }}
          </a>
        </h2>
        <p>{{ product.description }}</p>
      </div>
    `,
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent implements OnInit {
    products: Product[];
    sortBy: string;
    filterCriteria: string;
  
    constructor(private productService: ProductService) { }
  
    ngOnInit() {
      this.getProducts();
    }
  
    getProducts(): void {
      this.productService.getProducts()
        .subscribe(products => this.products = products,
          error => {
            console.error(error);
            this.products = [];
          });
    }
  }
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  sortBy: string;
  filterCriteria: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products,
        error => {
          console.error(error);
          this.products = [];
        });
  }
}
