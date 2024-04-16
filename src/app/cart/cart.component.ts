import { Component } from '@angular/core';
import { MarketService } from '../../services/market.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any[] = [];
  inx:number = 0;
  constructor(private market: MarketService) { }
  removeFromCart(id:number){
    this.inx = this.items.findIndex(item => item.id === id);
    this.items.splice(this.inx, 1);
  }
  increment(id:number){ 
    this.items.forEach(item => {
        if(item.id === id){
          item.quantity ++;
          item.total = item.price * item.quantity;
        }
    });
  }
  decrement(id:number){
    this.items.forEach(item => {
      if(item.id === id){
        item.quantity --;
        item.total = item.price * item.quantity;
      }
  });
  }
  ngOnInit() {
    this.items = this.market.getItems();
  }
}
