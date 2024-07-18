import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) {


  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn(): any {
    if (localStorage.getItem('token') != null)

    {
      return true;
    }
  else
  {
    return false;
  }
   }

   logout(){
localStorage.clear();
this.router.navigate(['/']);
   }
submit(data: any): any
{
  if (data.username == "admin" && data.password == "123") {
    this.setToken("hfdfdhhhgfhdfghz");
    return { status: "success", data: { name: "Aish", username: "admin", usertype: "admin" } }
  }
  else if (data.username == "manager" && data.password == "123") {
    this.setToken("hfdfdhhhgfhdfghz");
    return { status: "success", data: { name: "manager", username: "manager", usertype: "manager" } }
  }
  else {
    return {
      status: "Failed"
    };
  }

  // else   {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Something went wrong!",

  //   });}

  console.log(data);

}
}

