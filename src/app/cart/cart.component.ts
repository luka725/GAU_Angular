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
}
interface Products{
  products: Product[]
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
    price: 78.99,
    quantity: 9,
    seller: "Artel Market",
    size: "medium",
    color: "blue",
    material: "lastic",
    qty: 0
  }

  product2: Product = {
    id: 2,
    title: "T-shirts with multiple colors, for men and lady",
    image: "tshirt-1.jpg",
    price: 39.15,
    quantity: 5,
    seller: "Artel Market",
    size: "medium", 
    color: "blue", 
    material: "lastic",
    qty: 0
  }

  product3: Product = {
    id: 3,
    title: "T-shirts with multiple colors, for men and lady",
    image: "tshirt-1.jpg",
    price: 170.55,
    quantity: 8,
    seller: "Best factory LLC",
    size: "medium", 
    color: "blue", 
    material: "lastic",
    qty: 0
  }

  products:Products = {
    products: [this.product1, this.product2, this.product3],
  }

  selectedValues: number[] = []
}
