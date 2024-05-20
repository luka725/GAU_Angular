import { Injectable } from '@angular/core';

interface User{
  firstname:string,
  lastname:string,
  username:string,
  password:string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[] = [
    {
      firstname: "Luka",
      lastname: "Sheklashvili",
      username: "LS",
      password: "123",
    },
    {
      firstname: "Lukas",
      lastname: "Sh",
      username: "LSh",
      password: "1234",
    },
  ]
  isLoggedIn:boolean = false;
  
}
