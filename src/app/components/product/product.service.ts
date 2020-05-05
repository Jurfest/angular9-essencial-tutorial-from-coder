import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product-model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:3001/products';


  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  handleError(e: any): Observable<any> {
    console.log(e);
    this.showMessage('An error has occurred!', true)
    return EMPTY;
  }

  // post retorna um observable
  // observable: padrão baseado em evento
                                          // generics: notação de tipagem 
  create(product: ProductModel): Observable<ProductModel> {
    return this._http.post<ProductModel>(this.baseUrl, product).pipe(
      map(obj => obj),
                // nesse caso a arrow function garante que o this. utiliza a instancia atual
      catchError((error) => this.handleError(error))
    );
  }


  read(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }

  readById(id: string): Observable<ProductModel> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<ProductModel>(url).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }

  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`;
    return this._http.put<ProductModel>(url, product).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }

  delete(id: string): Observable<ProductModel> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.delete<ProductModel>(url).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }
}
