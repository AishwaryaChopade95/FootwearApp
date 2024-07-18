import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
products:any;

constructor(private http:HttpClient)
  {
    http.get("https://6644861b6c6a6565870ae80e.mockapi.io/products").subscribe(result=>
      {  
       this.products=result;
        
      }
    )

  
  }
}
