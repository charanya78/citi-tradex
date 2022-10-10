import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Chart,registerables  } from 'chart.js';
import { R3TargetBinder } from '@angular/compiler';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-sector-dashboard',
  templateUrl: './sector-dashboard.component.html',
  styleUrls: ['./sector-dashboard.component.css']
})
export class SectorDashboardComponent implements OnInit {

  Stocks: any = [];
  chart : any =[];
  stockticker : any =[];
  price : any = [];
  volume: any =[];
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
        this.price.push(this.Stocks[i].price);
        this.volume.push(this.Stocks[i].volume);
      }

      this.chart = new Chart('canvas', 
      {
      type: 'bar',
      data: 
      {
        labels: this.stockticker,
        datasets: [
        {
            label: 'Price of stock',
            data: this.price,
            borderWidth: 3,
            backgroundColor : 'rgb(222, 180, 171)',
            borderColor: '#624A45'
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Stock ticker vs price chart'
        }
      }
    }
   });
  });
}
}