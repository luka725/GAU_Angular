import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, last } from 'rxjs';
import { HttpClient } from '@angular/common/http';
interface User{
  id:number,
  firstname:string,
  lastname:string,
  username:string,
  password:string,
}
interface Message {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/messages';
  constructor(private http: HttpClient) { }

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

  addUser(newUser: User): void {
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
  }
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
  addMessage(message: Message): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }
}
