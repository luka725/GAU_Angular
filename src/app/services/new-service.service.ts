import { Injectable } from '@angular/core';

interface listitem{
  id:number,
  cat:number,
  name:string
}
interface category{
  id:number,
  name:string,
}
@Injectable({
  providedIn: 'root'
})

export class NewServiceService {
  constructor() { }
  
  categories:category[] =
  [
    {
      id: 1,
      name: "Uncategorized"
    },
    {
      id: 2,
      name: "Groceries"
    },
    {
      id: 3,
      name: "College"
    },
    {
      id: 4,
      name: "Payments"
    }
  ]
  list:listitem[] = [
    {
      id: 1,
      cat: 1,
      name: "Get a new helmet"
    },
    {
      id: 2,
      cat: 2,
      name: "Purchase Milk & Corn Flakes"
    },
    {
      id: 3,
      cat: 4,
      name: "Pay mortgage"
    },
    {
      id: 4,
      cat: 3,
      name: "Complete Assignments"
    },
    {
      id: 5,
      cat: 1,
      name: "Replace laptop’s screen"
    }  
  ]
  getCategories(excludes: string[]):category[]{
    return this.categories.filter(obj => !excludes.includes(obj.name))
  }
  getListItems(catid:number = 0):listitem[]{
    if(catid == 0){
      return this.list
    } 
    else{
      return this.list.filter(obj => obj.cat === catid);
    }
  }
  getCategoryByItemId(id:number):string{
      let index = this.categories.findIndex(obj => obj.id === id)
      return this.categories[index].name
  }
  addItem(newname:string, catid:number){
    let newitem:listitem = {
      id: this.list.length + 1,
      name: newname,
      cat: catid == 0 ? 1 : catid
    }
    this.list.push(newitem)
  }
  removeItemById(id:number){
    let index = this.list.findIndex(obj => obj.id === id)
    this.list.splice(index, 1);
  }
  getCategoryById(id:number){
    if(id == 0){
      return "All"
    }
    else{
      let index = this.categories.findIndex(obj => obj.id === id)
      return this.categories[index].name
    }
  }
}
