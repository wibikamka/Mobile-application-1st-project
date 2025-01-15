import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})  
export class ApiService {
  baseUrl = environment.backendUrl
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