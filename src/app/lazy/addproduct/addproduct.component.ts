// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form:any;
  products: any;
  id: any;
  formData: any;
  constructor(private router: Router, private route: ActivatedRoute,private common:CommonService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');                   
    

    if (this.id != null) {


      this.common.getbyid(this.id).subscribe((data) => {
        this.products = data;
        console.log(data);
        this.bind();
      })
    }
    else {
      this.bind();

    }
  }

  bind() {
    this.formData = new FormGroup({
      id: new FormControl(this.products != null ? this.products.id : "0"),
      name: new FormControl(this.products != null ? this.products.name : ""),
      price: new FormControl(this.products != null ? this.products.price : ""),
      description: new FormControl(this.products != null ? this.products.description : ""),
      image: new FormControl(this.products != null ? this.products.image : "")
    })
  }


  submit(data: any) {

    console.log(data);

 
      this.common.post(data).subscribe((result) => {
        this.router.navigate(['/lazy/products'])
        console.log(result)
      })

    }

  }


