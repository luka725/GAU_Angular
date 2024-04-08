import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product{
  id:number,
  name:string,
  rate:number,
  price:number,
  oldPrice:number,
  imgUrl:string
}
interface User{
  id:number,
  name:string,
  password:string
}
interface Detail{
  id:number,
  firstName:string,
  lastName:string,
  address:string,
  city:string,
  phostalCode:number,
  country:string,
  region:string,
  userId:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Details = new BehaviorSubject<any>({});
  currentDetails = this.Details.asObservable();
  constructor() { }
  users:User[] = [
    { id: 1, name: "Luka", password: "123"}
  ]
  details:Detail[] = [
    {id: 1, firstName: "Luka", lastName: "Sheklsahvili", address: "Sh.dadianis 20", city: "Tbilisi", phostalCode: 1103, country: "Georgia", region: "Old Tbilisi", userId: 1}
  ]
  products:Product[] = [
    { id: 1, name: "Dates Value Pack Pouch", rate: 4, price: 120.25, oldPrice: 123.25, imgUrl: "asd"},
    { id: 2, name: "Smoked Honey Spiced Nuts", rate: 4, price: 120.25, oldPrice: 123.25, imgUrl: "asdasd"}
  ]
  getUser(name:string, password:string){
    return this.users.find(user => user.name === name && user.password === password)
  }
  getCartProducts(){
    return this.products;
  }
  setDetails(userId:number){
    this.Details.next(this.details.find(detail => detail.userId === userId))
  }
}
 