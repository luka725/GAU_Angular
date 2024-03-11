import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  private data:string = "Shared data"

  constructor() { }
  
  getData(){
    return this.data
  }
  
  setData(newData:string){
    this.data = newData
  }
  
}
