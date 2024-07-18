import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  baseurl="https://6644861b6c6a6565870ae80e.mockapi.io/orders"
 
  constructor(private http:HttpClient) { }
  //To Get All Records
  get(){
     
    return this.http.get(this.baseurl);
  }
  //To Get Single Record By id
  getbyid(id:number){
    
    return this.http.get(this.baseurl + "/" +id );

  }
 // To Insert New Record
  post(body:any){

    return this.http.post(this.baseurl,body);

  }
 // To Update Record By Id
  put(id:number,body:any){

    return this.http.put(this.baseurl + "/" +id, body);
    
  }
  
  //To Delete Record By Id
  delete(id:number){

    return this.http.delete(this.baseurl + "/" +id );

    
  }


}


