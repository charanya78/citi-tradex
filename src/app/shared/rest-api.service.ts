import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../shared/stock';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Stocklist} from '../shared/stocklist'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:8080/api/stocks/';
  //apiURL= 'http://nishaali-stock-api-nishaali-stock-api.chennaidevops3.conygre.com/api/stocks/';
  getStockURL = 'https://v588nmxc10.execute-api.us-east-1.amazonaws.com/default/tickerList';
  getPriceURL = 'https://jqjfct0r76.execute-api.us-east-1.amazonaws.com/default/PythonPandas?';
  tradeAdvisorURL = 'https://qz4sxjl623.execute-api.us-east-1.amazonaws.com/default/tradeAdvisor?';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  // get all stocks as a list
  getStockList(): Observable<Stocklist> {
    return this.http.get<Stocklist>(this.getStockURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method 
  getStocks(): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method 
  getStock(id:any): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method 
  createStock(stock:Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiURL + '', JSON.stringify(stock), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  // get price method
  public getPrice(ticker:any): Observable<any> {
    console.log(this.getPriceURL + "ticker=" + ticker + "&num_days=1")
    return this.http.get<any>(this.getPriceURL + "ticker=" + ticker + "&num_days=1")
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  public getAdvice(ticker:any): Observable<any>{
    return this.http.get<any>(this.tradeAdvisorURL + "ticker=" + ticker)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method
  updateStock(id:number, stock:Stock): Observable<Stock> {
    return this.http.put<Stock>(this.apiURL, JSON.stringify(stock), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method 
  deleteStock(id:number){
    return this.http.delete<Stock>(this.apiURL + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}
