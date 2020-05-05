import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: ProductModel;

  constructor(
    private _httpservice: ProductService,
    private _router: Router,
    // permite pegar o id da rota atual, por exemplo
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // pega param da rota
    const id = this._route.snapshot.paramMap.get('id');
    // chamada desnecessaria a api. Mas tudo bem?
    this._httpservice.readById(id).subscribe((result) => {
      this.product = result;
    });
  }

  updateProduct(): void {
    this._httpservice.update(this.product).subscribe(() => {
      this._httpservice.showMessage('Product successfully updated');
      this._router.navigate(['/products']);
    });
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

}
