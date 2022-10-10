import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-entry',
  templateUrl: './page-entry.component.html',
  styleUrls: ['./page-entry.component.css']
})
export class PageEntryComponent implements OnInit {

  //constructor() { }

  constructor(private router: Router) {}
  login()
  {
  let username = (<HTMLInputElement>document.getElementById("exampleInputEmail1")).value;
  let password = (<HTMLInputElement>document.getElementById("exampleInputPassword1")).value;
  if(username === 'admin@gmail.com' && password === 'admin')
  {
    this.router.navigateByUrl('/login-success');

  } 
  }

  ngOnInit(): void {
  }

}
