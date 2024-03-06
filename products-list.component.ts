import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
prodList:Products[];

constructor(private pservice:ProductServiceService){



}
  ngOnInit(): void {
    this.pservice.GetAllProducts().subscribe((data:Products[])=>{this.prodList=data;
      console.log(data);
    });
    
  }



}
