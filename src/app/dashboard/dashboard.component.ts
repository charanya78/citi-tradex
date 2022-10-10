import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Chart,registerables  } from 'chart.js';
import { R3TargetBinder } from '@angular/compiler';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Stocks: any = [];
  chart : any =[];
  stockticker : any =[];
  price : any = [];
  volume: any =[];
  price_per_stock : any = [];

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
        if((this.Stocks[i].buyOrSell === "buy") || (this.Stocks[i].buyOrSell === "Buy"))
        {
        this.stockticker.push(this.Stocks[i].stockTicker);
        this.price.push(this.Stocks[i].price);
        this.volume.push(this.Stocks[i].volume);
        this.price_per_stock.push(this.Stocks[i].price/this.Stocks[i].volume);
        }
      }

      const data_fin = {
        labels: this.stockticker,
        datasets: [{
          label: 'Price per stock',
          data: this.price_per_stock,
          backgroundColor: [
            'rgb(255, 99, 132)',       
          ],
        }]
      };
      
      this.chart = new Chart('canvas',
      {
        type: 'bar',
        data: data_fin,
        options: 
        {
          plugins: {
            title: {
              display: true,
              text: 'Have a look at the price at which you have bought your stocks'
            },
          },
          responsive: true,
        },
      });
    const data_fin2 = {
    labels: this.stockticker,
    datasets: [{
    label: 'Volume transacted',
    data: this.volume,
    backgroundColor: [
      'rgb(220, 185, 147)',       
    ],
  }]
};

this.chart = new Chart('canvas2',
{
  type: 'bar',
  data: data_fin2,
  options: 
  {
    plugins: {
      title: {
        display: true,
        text: 'Have a look at the volume of stocks you have bought'
      },
    },
    responsive: true,
  },
});
}
)
}
}