import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  data:any = {}
  constructor (private setvice: ProductService){}
  ngOnInit(){
    this.setvice.currentDetails.subscribe(data => {
      this.data = data;
    })
  }
}
