import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { OrderapiService } from '../orderapi.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  data:any;
  constructor(private common:OrderapiService){}
  ngOnInit(): void {
   this.getAll();
  }


 getAll()
  {
    this.common.get().subscribe((result)=>{
      this.data=result;
      console.log(this.data);
      
     })
     
  }

  deleteProduct(id: number) {
  this.common.delete(id).subscribe((result)=>{
  this.getAll();
  })
  }
}