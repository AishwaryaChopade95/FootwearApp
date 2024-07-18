import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { adminroleGuard } from '../Shared/adminrole.guard';

const routes: Routes = [

  { path:"",component:LandingComponent,children:[
  
    {path:"dashboard",component:DashboardComponent},
    {path:"products",canActivate:[adminroleGuard],component: ProductsComponent},
    {path:"addproduct/:id",canActivate:[adminroleGuard],component: AddproductComponent},
    {path:"addproduct",canActivate:[adminroleGuard],component: AddproductComponent},
    {path:"orders",component: OrdersComponent},
    {path:"sidebar",component: SidebarComponent},
  
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
