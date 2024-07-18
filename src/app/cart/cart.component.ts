import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  data: any;
  deliveryCharge: any;
  discountAmount: any;
  cartProducts: any;
  subtotal: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('products') || '[]');

    this.calculatesubtotal();
  }


  delete(productId: any) {
    this.data = this.data.filter((product: any) => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(this.data))

    alert("Product remove successfully..........");

  }

  calculatesubtotal() {
    this.subtotal = this.data.reduce((total: any, curr: any) => total + curr.price * curr.quantity, 0);
    console.log(this.subtotal);
    
  }

 

  checkout() {
    this.router.navigate(['/checkout']);
    

  }
}
