import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {

  earnings : number = 0;
  expenditure : number = 0;
  Stocks: any = [];
  data : any =[];
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
  check(earnings: any, expenditure : any){
   this.expenditure = earnings;
   this.earnings = expenditure;
 for(let stock of this.Stocks){
    if(stock.buyOrSell=='buy'){
      this.expenditure += (stock.volume * stock.price);
    }
    else{
      this.earnings += (stock.volume * stock.price);
      console.log(this.earnings); 
    }
   this.data = [{name:'income',value: this.earnings},
                {name:'spending',value:this.expenditure}]
 }
}
}
