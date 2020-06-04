import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'node_modules/rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private REST_API_SERVER = "https://5ed92a854378690016c6ad43.mockapi.io/";

  constructor(private httpClient: HttpClient) { }

  handle_error(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public get(path){
    return this.httpClient.get(this.REST_API_SERVER+path).pipe(retry(3), catchError(this.handle_error));
  }


}
