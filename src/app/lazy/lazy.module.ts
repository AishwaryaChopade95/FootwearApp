import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LandingComponent } from './landing/landing.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    LandingComponent,

    DashboardComponent,
    ProductsComponent,

    OrdersComponent,
    SidebarComponent,
    AddproductComponent
    
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 

    
  ]
})
export class LazyModule { }
