import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Chart,registerables  } from 'chart.js';
import { R3TargetBinder } from '@angular/compiler';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-volume-dashboard',
  templateUrl: './volume-dashboard.component.html',
  styleUrls: ['./volume-dashboard.component.css']
})
export class VolumeDashboardComponent implements OnInit {

  Stocks: any = [];
  chart : any =[];
  stockticker : any =[];
  volume: any =[];
  totalVolume : number;
  data_graph: any =[];

  constructor( 
    public restApi: RestApiService
    ) {
      Chart.register(...registerables);
      this.totalVolume =0;
     }

  ngOnInit(): void 
  {
    this.restApi.getStocks().subscribe(data  => 
    {
      this.Stocks = data;
      for(var i = 0; i<this.Stocks.length ;i++)
      {
        this.stockticker.push(this.Stocks[i].stockTicker);
        this.volume.push(this.Stocks[i].volume);
      }
      console.log(this.volume);
      for(var i=0; i<this.volume.length;i++)
      {
        this.totalVolume = this.totalVolume + this.volume[i];
      }

      for(var i=0; i<this.volume.length;i++)
      {
        this.data_graph[i] = (this.volume[i]/this.totalVolume)*100;
      }      
      const data_fin = {
        labels: this.stockticker,
        datasets: [{
          label: 'Volume distribution over companies',
          data: this.data_graph,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(198, 169, 139)',
            'rgb(234, 214, 192)',
          ],
        }]
      };
      
      this.chart = new Chart('canvas',
      {
        type: 'pie',
        data: data_fin,
        options: 
        {
          plugins: {
            title: {
              display: true,
              text: 'Have a look at the volume distribution of your stocks'
            },
          },
          responsive: true,
          radius : 320
        },
      });
})
  }
}
