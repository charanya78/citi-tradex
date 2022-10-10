// import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
//import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { PageEntryComponent } from './page-entry/page-entry.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { GetstocksComponent } from './getstocks/getstocks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { SectorDashboardComponent } from './sector-dashboard/sector-dashboard.component';
import { VolumeDashboardComponent } from './volume-dashboard/volume-dashboard.component';
import { StatusDashboardComponent } from './status-dashboard/status-dashboard.component';

//import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';
import { MyWalletComponent } from './my-wallet/my-wallet.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    StockCreateComponent,
    StockListComponent,
    StockEditComponent,
    PageEntryComponent,
    LoginSuccessComponent,
    GetstocksComponent,
    DashboardComponent,
    //DashboardComponent
    SectorDashboardComponent,
    VolumeDashboardComponent,
    StatusDashboardComponent,
    MyWalletComponent,
    LoginComponent,
    
  //  DataTablesModule,
    //CommonModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxChartsModule
    
  ],
  providers: [],   //MDBSpinningPreloader,
  bootstrap: [AppComponent]
})
export class AppModule { }
