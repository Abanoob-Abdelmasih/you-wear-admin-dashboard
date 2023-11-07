import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  public IS_LIVE = ["web.bandarestate.com"].includes(window.location.hostname);

  // temporary commenting this for
  private API_URL = "http://127.0.0.1:8000/api";
  //  private API_URL = 'https://dev-cp.bandarestate.com/api/'
  public baseRoute = "v1";

  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'x-content-type-options':'nosniff',
      //   'x-xss-protection':'1',
      //   'x-frame-options': 'SAMEORIGIN'
    }),
  };

  constructor(private http: HttpClient) {}

  readRequest(url: string, params?: any): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(this.API_URL + this.serialize(url, params), {
        observe: "response",
      })
      .pipe(catchError(this.handleError));
  }

  readRequestNew(url: string, params?: any): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(this.serialize(url, params), { observe: "response" })
      .pipe(catchError(this.handleError));
  }

  readExternalRequest(
    url: string,
    params: Object
  ): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.serialize(url, params), {
      observe: "response",
    });
  }

  postRequest(url: string, getParams: any, postParams: any): Observable<any> {
    return this.http
      .post<any>(
        this.API_URL + this.baseRoute + this.serialize(url, getParams),
        postParams,
        this.HTTP_OPTIONS
      )
      .pipe(catchError(this.handleError));
  }

  postNewRequest(
    url: string,
    getParams: any,
    postParams: any
  ): Observable<any> {
    return this.http
      .post<any>(
        this.API_URL + this.baseRoute + this.serialize(url, getParams),
        postParams,
        { ...this.HTTP_OPTIONS, observe: "response" }
      )
      .pipe(catchError(this.handleError));
  }

  putRequest(url: string, getParams: Object, postParams: any): Observable<any> {
    return this.http
      .put<any>(
        this.API_URL + this.baseRoute + this.serialize(url, getParams),
        postParams,
        this.HTTP_OPTIONS
      )
      .pipe(catchError(this.handleError));
  }

  deleteRequest(url: string, params: Object): Observable<HttpResponse<any>> {
    return this.http
      .delete<any>(
        this.API_URL + this.baseRoute + this.serialize(url, params),
        { observe: "response" }
      )
      .pipe(catchError(this.handleError));
  }

  serialize(url: string, params: any) {
    let query = [];
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        query.push(key + "=" + encodeURIComponent(params[key]));
      }
    }
    return query.length ? url + "?" + query.join("&") : url;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    // return throwError('Something bad happened; please try again later.');
    return throwError(error);
  }

  getLang() {
    return "en";
  }

  getApiUrl() {
    return this.API_URL + this.baseRoute;
  }
}
