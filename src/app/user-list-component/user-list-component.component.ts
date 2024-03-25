import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css'
})
export class UserListComponentComponent {
  title:string = "User List";
  constructor (private Service:UserServiceService, private router: Router){}
  getUsers(){
    return this.Service.UsersList;
  }
  singleUser(id:number){
      this.router.navigateByUrl(`/users/${id}`);
  }
}
