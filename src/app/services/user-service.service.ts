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
      email: "john.doe@example.com",
      name: "John Doe",
      status: "bad"
    },
    {
      id: 2,
      email: "alice.smith@example.com",
      name: "Alice Smith",
      status: "good"
    },
    {
      id: 3,
      email: "michael.johnson@example.com",
      name: "Michael Johnson",
      status: "bad"
    },
    {
      id: 4,
      email: "emily.brown@example.com",
      name: "Emily Brown",
      status: "good"
    },
    {
      id: 5,
      email: "david.wilson@example.com",
      name: "David Wilson",
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
