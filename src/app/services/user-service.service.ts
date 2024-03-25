import { Injectable } from '@angular/core';
interface User{
  id:number,
  email:string,
  name:string,
  status:string
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  UsersList:User[] = [
    {
      id: 1,
      email: "email",
      name: "name",
      status: "bad"
    },
    {
      id: 2,
      email: "email",
      name: "name",
      status: "good"
    },
    {
      id: 3,
      email: "email",
      name: "name",
      status: "bad"
    },
    {
      id: 4,
      email: "email",
      name: "name",
      status: "good"
    },
    {
      id: 5,
      email: "email",
      name: "name",
      status: "good"
    },
  ]
  getUsersList(){
    return this.UsersList;
  }
  getUserById(id:number){
    let index = this.UsersList.findIndex(obj => obj.id === id)
    return this.UsersList[index]
  }
}
