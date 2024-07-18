import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Shared/auth.service';
import { CommonService } from 'src/app/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url: any = "https://6644861b6c6a6565870ae80e.mockapi.io/orders";
  data: any;
  arrSize: any = 0;
  products: any;
  order: any;
  constructor(private router: Router, private authService: AuthService, private api: CommonService, private http: HttpClient) {
    this.http.get(this.url).subscribe((result) => {
      this.order = result;
    })

  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('products') || '[]');

    this.arrSize = this.data.length;

    this.api.get().subscribe((data) => {
      this.products = data;
    })
  }

  logout() {
    this.authService.logout();

    // this.router.navigate(["/adminlogin"])
    // { Swal.fire({
    //   title:"Logout successfully........",
    //   icon:"success"
    // })
    //   this.router.navigate(['/adminlogin']);
    // };
  }

}

