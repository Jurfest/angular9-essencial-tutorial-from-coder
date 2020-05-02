import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { ProductService} from '../product.service'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private _productservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this._productservice.showMessage("Product successfully created");
  }

  cancel():void {
    this._router.navigate(['/products']);
  }

}
