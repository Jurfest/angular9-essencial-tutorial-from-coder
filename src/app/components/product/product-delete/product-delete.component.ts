import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model'
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: ProductModel;

  constructor(
    private _httpservice: ProductService, 
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    // chamada desnecessaria a api. Mas tudo bem?
    this._httpservice.readById(id).subscribe((result) => {
      this.product = result;
    });
  }

  deleteProduct() {
    const id = this._route.snapshot.paramMap.get('id');
    this._httpservice.delete(id).subscribe(() => {
      this._httpservice.showMessage('Product successfully deleted');
      this._router.navigate(['/products']);
    });
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

  

}
