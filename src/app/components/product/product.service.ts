import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:3001/products';


  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) { }

  showMessage(msg: string): void {
    this._snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  // post retorna um observable
  // observable: padrão baseado em evento
                                          // generics: notação de tipagem 
  create(product: ProductModel): Observable<ProductModel> {
    return this._http.post<ProductModel>(this.baseUrl, product);
  }

  read(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.baseUrl);
  }
}
