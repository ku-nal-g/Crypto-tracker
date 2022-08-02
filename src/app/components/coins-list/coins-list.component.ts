import { Component, OnInit ,ViewChild } from '@angular/core';
import { BitcoinApiService } from 'src/app/services/bitcoin-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  bannerListItem: any = [];
  tableListItem: any = [];
  currency: string = '';

  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private bitcoinApi: BitcoinApiService,private router:Router) { }

  ngOnInit(): void {
    this.bitcoinApi.selectedcurrency$.subscribe((value) => {
      this.currency = value;
    })
    this.getBannerData();
    this.getTableData();
  }

  getBannerData() {
    this.bitcoinApi.getTrendingCurrency(this.currency).subscribe((res) => {
      this.bannerListItem = res;
    }, (error: Error) => {
      console.log(error.message);
    })
  }

  getTableData() {
    this.bitcoinApi.getCurrency(this.currency).subscribe((res) => {
      this.tableListItem = res;
      this.dataSource = new MatTableDataSource(this.tableListItem);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (error: Error) => {
      console.log(error.message);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetailsPage(row:any){
    this.router.navigate(['coin-details',row.id]);
  }

}
