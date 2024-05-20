import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface User{
  id:number,
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
      id: 1,
      firstname: "Luka",
      lastname: "Sheklashvili",
      username: "LS",
      password: "123",
    },
    {
      id: 2,
      firstname: "Lukas",
      lastname: "Sh",
      username: "LSh",
      password: "1234",
    },
  ]
  private isLoggedIn: boolean = false;
  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  username$: Observable<string | null> = this.usernameSubject.asObservable();
  
  checkUserExists(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }

  login(username: string, password: string): boolean {
    const userExists = this.checkUserExists(username, password);
    if (userExists) {
      this.isLoggedIn = true;
      this.usernameSubject.next(username);
    }
    return userExists;
  }
  logout(): void {
    this.isLoggedIn = false;
    this.usernameSubject.next(null);
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }
}
