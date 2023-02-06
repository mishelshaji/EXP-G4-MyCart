import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  products = [
    {name: "product 1"},
    {name: "product 2"},
    {name: "product 3"},
    {name: "product 4"},
    {name: "product 5"},
    {name: "product 6"},
    {name: "product 7"},
    {name: "product 8"},
  ];

  getAll(){
    return this.products;
  }
 
}
