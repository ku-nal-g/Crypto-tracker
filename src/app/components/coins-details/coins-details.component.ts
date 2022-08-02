import { BitcoinApiService } from './../../services/bitcoin-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coins-details',
  templateUrl: './coins-details.component.html',
  styleUrls: ['./coins-details.component.scss']
})
export class CoinsDetailsComponent implements OnInit {

  coinDetails: any = [];
  coinId!: string;

  constructor(private bitcoinApi: BitcoinApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //extracting data from router using activated route
    this.activatedRoute.params.subscribe((value) => {
      this.coinId = value['id'];
    });
    this.getApiData();
  }

  getApiData() {
    this.bitcoinApi.getCurrencyById(this.coinId).subscribe((res) => {
      this.coinDetails = res;
      console.log(this.coinDetails);
    })
  }

}
