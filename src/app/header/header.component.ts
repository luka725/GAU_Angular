import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  private usernameSubscription!: Subscription;
  constructor (private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.usernameSubscription = this.userService.username$.subscribe(username => {
      this.userName = username;
    });
  }
  ngOnDestroy(): void {
    this.usernameSubscription.unsubscribe();
  }
  onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
