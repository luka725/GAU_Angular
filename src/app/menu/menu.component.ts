import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isLoggedIn: boolean = false;
  constructor (private userService:UserService){}
  ngOnInit(): void {
    this.userService.username$.subscribe(username => {
      this.isLoggedIn = !!username;
    });
  }
  logout(): void {
    this.userService.logout();
  }
}
