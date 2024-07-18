import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { identifierName } from '@angular/compiler';
import Swal from 'sweetalert2';
import { OrderapiService } from '../lazy/orderapi.service';
declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  constructor(private common: OrderapiService) { }

  // btnSubmitData(arg0: any) {
  // throw new Error('Method not implemented.');
  // }

  data: any;
  formdata: any;
  subtotal: any;

  url: any = "https://6644861b6c6a6565870ae80e.mockapi.io/orders";

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('products') || '[]');

    this.subtotal = this.data.reduce((total: any, curr: any) => total + curr.price * curr.quantity, 0);

    this.bind();
  }


  bind() {
    this.formdata = new FormGroup(
      {
        id: new FormControl(""),
        name: new FormControl(""),
        city: new FormControl(""),
        pincode: new FormControl(""),
        email: new FormControl(""),
        mblno: new FormControl(""),
      }
    )
  }


  btnSubmitData(data: any) {
    this.common.post(data).subscribe((result) => {

    })

    Swal.fire({
      title: "Place order successfully........",
      icon: "success"
    })
    // alert("Place order successfully..........");
    console.log(data);

  }


  message: any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_R4RtmwXxODb49g",
    "amount": "200",
    "name": "Aishwarya Chopade",
    "description": "Web Development",
    "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };


  payNow() {

    this.paymentId = '';
    this.error = '';
    this.options.amount = (this.subtotal * 100).toString();
      this.options.prefill.name = (this.formdata.name);
    this.options.prefill.email = (this.formdata.email);
    this.options.prefill.contact = (this.formdata.mblno);
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }
}
