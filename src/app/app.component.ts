import { Component } from '@angular/core';
import { NewServiceService } from './services/new-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
 
  constructor(private Service: NewServiceService){}

  catId:number = 0;
  catName:string = "";
  inputValue:string = "";

  setCatid(catId:number){
    this.catId = catId;
  }
  getList(){
    return this.Service.getListItems(this.catId);
  }
  removeItem(itemId:number){
    this.Service.removeItemById(itemId)
  }
  addItem(){
    this.Service.addItem(this.inputValue, this.catId)
  }
  getCats(){
    return this.Service.getCategories(['Uncategorized']);
  }
  getCatNameByItemId(itemId:number){
    return this.Service.getCategoryByItemId(itemId);
  }
}
