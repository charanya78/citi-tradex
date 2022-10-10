import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Chart,registerables  } from 'chart.js';
import { R3TargetBinder } from '@angular/compiler';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-status-dashboard',
  templateUrl: './status-dashboard.component.html',
  styleUrls: ['./status-dashboard.component.css']
})
export class StatusDashboardComponent implements OnInit {

  Stocks: any = [];
  chart : any =[];
  stockticker : any =[];
  timestamp : any = [];
  status: any =[];
  statusCode: any =[];
  constructor( 
    public restApi: RestApiService
    ) {
      Chart.register(...registerables);

     }

  ngOnInit(): void 
  {
    this.restApi.getStocks().subscribe(data  => 
    {
      this.Stocks = data;
      for(var i = 0; i<this.Stocks.length ;i++)
      {
        this.stockticker.push(this.Stocks[i].stockTicker);
        this.timestamp.push(this.Stocks[i].date_Time);
        this.status.push(this.Stocks[i].statusCodeCity);
      }
      for(var i = 0;i<this.status.length;i++)
      {
        if(this.status[i]==0)
        {
        this.statusCode[i] = "Initialized";
        }
        else if(this.status[i]==1)
        {
        this.statusCode[i] = "Processing";
        }
        else if(this.status[i]==2)
        {
        this.statusCode[i] = "Placed";
        }
        else 
        {
          this.statusCode[i] = "Rejected";
        }
      }
    })
  }
}
