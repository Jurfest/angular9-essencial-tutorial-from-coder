import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-model'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: ProductModel[];
  displayedColumns: string[] = ['id', 'name', 'price'];

  constructor(private _service: ProductService) { }

  ngOnInit(): void {
    this._service.read().subscribe((result) => {
      this.products = result;

      console.log(`products array (difficult to inspect): ${this.products}`);
      console.log("products array (better to inspect):", this.products);
    });
  }

}
