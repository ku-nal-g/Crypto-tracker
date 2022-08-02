import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinApiService {

  private currency$ = new BehaviorSubject<any>({});
  selectedcurrency$ = this.currency$.asObservable();

  constructor(private httpClient: HttpClient) { }

  //banner api data for trending bitcoin currency

  getTrendingCurrency(currency: string) {
    return this.httpClient.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  //api for table data

  getCurrency(currency: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  //get cuurency by id api

  getCurrencyById(coinId: string) {
    return this.httpClient.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }

  //passing currency from top bar to coins list using behaviour subject
  setCurrency(currency: any) {
    this.currency$.next(currency);
  }

}
