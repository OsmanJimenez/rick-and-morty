import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getAll(url: any) {
    return this.http.get<any>(`${environment.apiUrl}${url}`).pipe(
      catchError((res: any) => {
        this.getCatchError(res);

        return throwError(
          () => 'Ups algo salio mal, por favor contacte a soporte'
        );
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  create(url: any, data: any) {
    return this.http.post<any>(`${environment.apiUrl}${url}`, data).pipe(
      catchError((res: HttpErrorResponse) => {
        this.getCatchError(res);

        return throwError(
          () => 'Ups algo salio mal, por favor contacte a soporte'
        );
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  update(url: any, data: any) {
    return this.http.put<any>(`${environment.apiUrl}${url}`, data).pipe(
      catchError((res: HttpErrorResponse) => {
        this.getCatchError(res);
        return throwError(
          () => 'Ups algo salio mal, por favor contacte a soporte'
        );
      }),
      map((response: any) => {
        return response;
      })
    );
  }


  getCatchError(res: any) {
    
      console.error(
        'Error data: ',
        res.error.payload.data,
        'Error error: ',
        res.error.payload.error,
        'Error message: ',
        res.error.payload.message
      );
      
  }
}
