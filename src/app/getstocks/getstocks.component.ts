//adding loader and searchbar
import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-getstocks',
  templateUrl: './getstocks.component.html',
  styleUrls: ['./getstocks.component.css']
})

export class GetstocksComponent implements OnInit {
  ticker:any=[];
  advice : any = [];
  selected:any =[];
  Stocklist: any = [];
  price: number = 0;
  date : string = "";
  filterTerm: string = "";
  upperBand : number = 0;
  lowerBand : number = 0;
  div1:boolean=false;
  priceDiv:boolean=false;
 public name : any;
  constructor( 
    public restApi: RestApiService
    ) { }

  ngOnInit(): void {
    this.loadStocks()
  }
//.subscribe(res => this.items = res.json(),
  loadStocks() {
    return this.restApi.getStockList().
    subscribe((data: {
      
    }) => {
        this.Stocklist = data;
        if(data){
          hideLoader();
        }
    }
    );
    function hideLoader(){
      document.getElementById('loading')!.style.display = 'none';
    } 
  }

  

  selectedChanged() {
    console.log(this.selected);
  }
 
  getStockPrice(){
    return this.restApi.getPrice(this.selected).subscribe((data: {}) => {
      this.priceDiv = true;
      this.ticker = data;
      console.log(data);
     console.log((this.ticker[Object.keys(this.ticker)[1]])[0][1]);
     this.price = (this.ticker[Object.keys(this.ticker)[1]])[0][1];
    }
    
    )
  }
  getTradeAdvice(){
    return this.restApi.getAdvice(this.selected).subscribe((data:{advice: any,lastClose:any,upperBand:any,lowerBand:any}) => {
      if(data){
        this.div1 = true;
        console.log('works');
      this.advice = data["advice"];
      this.lowerBand = data["lowerBand"];
      this.upperBand = data["upperBand"];
      }
    });
    
  }
  changeLabelName() {
    this.name = this.selected;
  }

  putPrice(){
    
  }
}

