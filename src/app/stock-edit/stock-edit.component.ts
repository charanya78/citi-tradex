import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})

export class StockEditComponent implements OnInit{

  id = this.actRoute.snapshot.params['id'];
  StockDetails: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.restApi.getStock(this.id).subscribe((data: {}) => {
      this.StockDetails = data;
    })
  }

  updateStock() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateStock(this.id, this.StockDetails).subscribe(data => {
        this.router.navigate(['/stock-list'])
      })
    }
  }

}
