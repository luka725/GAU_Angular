import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product{
  id: number,
  title: string,
  image: string,
  price: number,
  quantity: number,
  size: string,
  color: string,
  material:string,
  seller: string,
  qty: number, 
  stockprice: number
}
interface Products{
  items: Product[]
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product1: Product = {
    id: 1,
    title: "T-shirts with multiple colors, for men and lady",
    image: "tshirt-1.jpg",
    price: 10.95,
    quantity: 9,
    seller: "Artel Market",
    size: "medium",
    color: "blue",
    material: "lastic",
    qty: 1,
    stockprice: 10.95
  }

  product2: Product = {
    id: 2,
    title: "T-shirts with multiple colors, for men and lady",
    image: "tshirt-1.jpg",
    price: 40.55,
    quantity: 5,
    seller: "Artel Market",
    size: "medium", 
    color: "blue", 
    material: "lastic",
    qty: 1,
    stockprice: 40.55
  }

  product3: Product = {
    id: 3,
    title: "T-shirts with multiple colors, for men and lady",
    image: "tshirt-1.jpg",
    price: 39.99,
    quantity: 8,
    seller: "Best factory LLC",
    size: "medium", 
    color: "blue", 
    material: "lastic",
    qty: 1,
    stockprice: 39.99
  }

  products:Products = {
    items: [this.product1, this.product2, this.product3],
  }

  updateStockPrice(){
    for (const product of this.products.items) {
        product.stockprice = product.price * product.qty
        product.stockprice = Number(product.stockprice.toFixed(2))
    }
    this.updateTotalPrice()
  }

  SubtotalPrice:number = 0; 
  
  updateTotalPrice(){
    this.SubtotalPrice = 0
    for (const product of this.products.items) {
      this.SubtotalPrice += product.stockprice
    }
    this.SubtotalPrice = Number(this.SubtotalPrice.toFixed(2))
  }
  hideProduct(){
    
  }
}
