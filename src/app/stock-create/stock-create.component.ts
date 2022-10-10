import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit 
{
    @Input() StockDetails = {
      id : 0,
      stockTicker : "",      // remove these comments if needed
      stockName :"",
      price : 0,
      volume : 0,
      buyOrSell : "",
      date_Time:"",
      statusCodeCity : 0
       }

    constructor(
      public restApi: RestApiService, 
      public router: Router
    ) { }
    ngOnInit() { }
    
    addStock() {
      this.restApi.createStock(this.StockDetails).subscribe((data: {}) => {
        this.router.navigate(['/stock-list'])
      })
    }
}
