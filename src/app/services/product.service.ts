import { Injectable } from '@angular/core';
interface Product{
  id:number,
  name:string,
  rate:number,
  price:number,
  oldPrice:number,
  imgUrl:string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products:Product[] = [
    { id: 1, name: "Dates Value Pack Pouch", rate: 4, price: 120.25, oldPrice: 123.25, imgUrl: "asd"},
    { id: 2, name: "Smoked Honey Spiced Nuts", rate: 4, price: 120.25, oldPrice: 123.25, imgUrl: "asdasd"}
  ]

  getCartProducts(){
    return this.products;
  }
}
 