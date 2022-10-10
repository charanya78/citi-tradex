import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  selected:any =[];
  x : any =  [];
  price: number = 0;
  ticker:any=[];
  Stocks: any = [];
  filterTerm: string = "";
  profirOrLoss : string =  "";
  sum : number = 0;
  constructor( 
    public restApi: RestApiService
    ) { }

  ngOnInit(): void {
    this.loadStocks()
  }

  loadStocks() {
    return this.restApi.getStocks().subscribe((data: {}) => {
        this.Stocks = data;
    })
  }

  deleteStock(id:any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteStock(id).subscribe(data => {
        this.loadStocks()
      })
    }
  }  
  getStockPrice(stockId:any,stockTicker:any,stockPrice:any){
    return this.restApi.getPrice(stockTicker).subscribe((data: {}) => {
      this.ticker = data;
      console.log(data);
      this.x = stockId;
      this.price = (this.ticker[Object.keys(this.ticker)[1]])[0][1];
      console.log(this.price);
      this.sum = (this.price - stockPrice)/stockPrice;
      this.sum = this.sum * 100;
      console.log(this.sum * 100 );
    }

    
    )
  }
  getProfitOrLoss(){

  }

}