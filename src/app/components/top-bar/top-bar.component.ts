import { Component, OnInit } from '@angular/core';
import { BitcoinApiService } from 'src/app/services/bitcoin-api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  selectedCurrency:string = 'INR';

  constructor(private bitcoinApi: BitcoinApiService) { }

  ngOnInit(): void {
    this.onSelectedCurrency(this.selectedCurrency);
  }

  getCurrency(event:any){
    this.selectedCurrency = event;
    this.onSelectedCurrency(this.selectedCurrency)
  }

  onSelectedCurrency(currency:string) {
    this.bitcoinApi.setCurrency(currency);
  }

}
