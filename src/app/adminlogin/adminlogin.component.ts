import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../Shared/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  data: any;
  formdata: any;


  constructor(private router: Router, private authservice:AuthService) {

  }

  ngOnInit(): void {
    if(this.authservice.isLoggedIn()){
      this.router.navigate(['/lazy/dashboard']);
    }
    // this.data = JSON.parse(localStorage.getItem('products') || '[]');
    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }


  delete(productId: any) {
    this.data = this.data.filter((product: any) => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(this.data))

    alert("Product remove successfully..........");

  }

  submit(data: any) {
    // if (data.username == "admin" && data.password == "123") {
    //   Swal.fire({
    //     title: "Login successfully........",
    //     icon: "success"
    //   })
    //   this.router.navigate(['/lazy/dashboard']);
    // }
    // else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",

    //   });
    // }
    let result = this.authservice.submit(data);
    // let result = this.auth.submit(data);
    if (result.status == "success") {
      localStorage.setItem("name", result.data.name);
      localStorage.setItem("username", result.data.username);
      localStorage.setItem("usertype", result.data.usertype);
      this.router.navigate(['/lazy/dashboard']);
      Swal.fire({
            title: "Login successfully........",
            icon: "success"
          })
      this.router.navigate(['/lazy/dashboard']);
    }
    else {
      alert("invalid")
      Swal.fire({
        title:"Logout successfully........",
        icon:"success"
      })
        this.router.navigate(['/adminlogin']);
      };
    }

    // console.log(data);

  }



