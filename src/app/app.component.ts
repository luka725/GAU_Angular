import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewServiceService } from './services/new-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  constructor(private Service: NewServiceService){

  }
  getNewData(){
    return this.Service.getData();
  }
}
