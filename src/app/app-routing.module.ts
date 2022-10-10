import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { PageEntryComponent } from './page-entry/page-entry.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { GetstocksComponent } from './getstocks/getstocks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectorDashboardComponent } from './sector-dashboard/sector-dashboard.component';
import { VolumeDashboardComponent } from './volume-dashboard/volume-dashboard.component';
import { StatusDashboardComponent } from './status-dashboard/status-dashboard.component';
import {MyWalletComponent } from './my-wallet/my-wallet.component' ;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-success' },
  { path: 'page-entry', component: PageEntryComponent },
  { path: 'create-stock', component: StockCreateComponent },
  { path: 'stock-list', component: StockListComponent },
  { path: 'stock-edit/:id', component: StockEditComponent } ,
  { path : 'login-success', component:LoginSuccessComponent},
  {path: 'getallstocks' , component: GetstocksComponent},
  {path: 'dashboard' , component: DashboardComponent},
  { path :'sector-dashboard', component: SectorDashboardComponent},
  { path :'volume-dashboard', component: VolumeDashboardComponent},
  { path :'status-dashboard', component: StatusDashboardComponent},
  {path : 'mywallet',component : MyWalletComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }