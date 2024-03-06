import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   apiurl:string="https://localhost:44311/api/Products";

  constructor(private http:HttpClient) 
  { 


  }


  public GetAllProducts():Observable<any[]>
  {
  
 let pList:Products[];
return this.http.get<Products[]>(this.apiurl);

  }



}
