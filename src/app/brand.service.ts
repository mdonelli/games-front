import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Brand } from './brand';
import {environment} from "../environments/environment";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(
      private http: HttpClient
  ) {}

  getBrands() {
    return this.http.get<Brand[]>(environment.apiUrl + environment.brandsPath).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.error.message);
        return throwError(() => new Error(error.error.message));
      })
    );
  }
}
