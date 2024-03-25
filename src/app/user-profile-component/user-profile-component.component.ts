import { Component, OnInit  } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-profile-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css'
})
export class UserProfileComponentComponent{
  constructor (private Service:UserServiceService, private route: ActivatedRoute){}
  userId: number = 1;
  getUser(){
    return this.Service.getUserById(this.userId)
  }
}
