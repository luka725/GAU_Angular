import { Component } from '@angular/core';
import { MarketService } from '../../services/market.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any = this.getAllProducts()
  constructor(private market:MarketService){}
  getAllProducts(){
    return this.market.getAllProduct()
  }
  
  addToCart(product: any) {
    this.market.addToCart(product);
    window.alert('Product added to cart');
  }
}
