import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { ProductService} from '../product.service'
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: ProductModel = {
    name: '',
    price: null
  }


  constructor(private _productservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this._productservice.create(this.product).subscribe(() => {
      this._productservice.showMessage("Product successfully created");
      this._router.navigate(['/products']);
    });
  }

  cancel():void {
    this._router.navigate(['/products']);
  }

}
