import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})  
export class ApiService {
  baseUrl = 'https://b370-149-113-30-113.ngrok-free.app/api/'
  token : any=''
  constructor(private http: HttpClient) {
    
   }

   post(url: any, data: any) {
    this.token = localStorage.getItem('userToken')||''
    return this.http.post(
       this.baseUrl + url, 
       data,
       { 
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }) 
      }
    );
 }
 

   get(url:any){
    this.token = localStorage.getItem('userToken')||''
    return this.http.get(this.baseUrl+url,
      { 
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json'
        }) 
      }
    )
    
   }
}