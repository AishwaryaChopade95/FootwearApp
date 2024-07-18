import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { authGuard } from './Shared/auth.guard';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"product",component:ProductComponent},
{path:"product/:id",component:ProductdetailsComponent},
{path:"cart",component:CartComponent},
{path:"adminlogin",component:AdminloginComponent,pathMatch:"full"},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"checkout",component:CheckoutComponent},
{path:"",component:PagenotfoundComponent},

{path:"lazy",canActivate:[authGuard],loadChildren:()=>import('./lazy/lazy.module').then(m=>m.LazyModule) },
{path:"**",component:AdminloginComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
