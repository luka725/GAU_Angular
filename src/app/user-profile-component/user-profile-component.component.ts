import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-user-profile-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css'
})
export class UserProfileComponentComponent{
  constructor (private Service:UserServiceService, private route: ActivatedRoute, private router: Router){}
  userId: number = 1;
  currentUser:any = this.getUser();
  
  getUser(){
    this.route.params.subscribe(params => {
      this.userId = parseInt(params['id'], 10);
      console.log(params);
    });
    return this.Service.getUserById(this.userId)
  }
  goBack(){
    this.router.navigate(['/users'])
  }
}
