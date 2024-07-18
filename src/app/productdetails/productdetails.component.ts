import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  id:any;
  product:any;
  details:any;
  quantity:any = 1;
  products:any=[];

ngOnInit():void
{
  this.products = JSON.parse(localStorage.getItem("products")|| "[]");
}


constructor(private route:ActivatedRoute, private http:HttpClient)
{
 
  this.id = route.snapshot.paramMap.get("id");
  console.log(this.id);

  http.get("https://6644861b6c6a6565870ae80e.mockapi.io/products/"+this.id).subscribe(result=>
    {
      this.product=result;
    }
  )
  
  }


  addtocart()
  {
    this.details =
    {
      id:this.product.id,
      name:this.product.name,
      price:this.product.price,
     quantity:this.quantity,
     image:this.product.image,
     description:this.product.description
    }
    //push data to local storage
    this.products.push(this.details);
    console.log(this.products);
    localStorage.setItem("products",JSON.stringify(this.products));

    alert("products added to cart...");
    
    
    }

  add()
  {
    this.quantity += 1;
  }
  
  minus()
  {
    if(this.quantity > 1)
      {
        this.quantity -= 1;
      }
  }
  


  
}
