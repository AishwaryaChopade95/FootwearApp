import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private common:CommonService){}
  
  ngOnInit(): void {
   this.getAll();
  }
  
  getAll()
  {
    this.common.get().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
      
     })
     
  }

  deleteProduct(id: number) {
  this.common.delete(id).subscribe((result)=>{
  this.getAll();
  })
  }
}
