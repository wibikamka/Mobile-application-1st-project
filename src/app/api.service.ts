import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})  
export class ApiService {
  baseUrl = 'http://localhost:8000/api/'
  token : any=''
  constructor(private http: HttpClient) {
    
   }

   post(url: any, data: any) {
    this.token = localStorage.getItem('userToken')||''
    return this.http.post(
       this.baseUrl + url, 
       data,
       { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token }) }
    );
 }
 

   get(url:any){
    this.token = localStorage.getItem('userToken')||''
    return this.http.get(this.baseUrl+url,
      {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})})
    
   }
}
