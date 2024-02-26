import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  wrapper:string = "wrapper";
  buttonwrapper:string = "buttonwrapper";
  number:number = 0;
  increment(){
    this.number += 1;
  }
  decrement(){
    this.number -= 1;
  }
}
