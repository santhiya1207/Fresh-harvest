import { Injectable } from "@angular/core";
import { Login } from "./Login";
import { Observable, catchError, map, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  REST_API: string = "http://localhost:8000/api";

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) {}

  userLogin(data: Login): Observable<any> {
    let API_URL = `${this.REST_API}/Login`;

    return this.httpClient.post(API_URL, data).pipe(
      catchError((error) => {
        if (
          error.status === 401 &&
          error.error.message === "Invalid credentials"
        ) {
          console.log("Invalid credentials:", error);
        } else {
          console.log("Other error:", error);
        }

        return throwError(error);
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code:${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(() => {
      errorMessage;
    });
  }
}
