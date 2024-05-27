import { Component } from '@angular/core';
import { OurservicesComponent } from '../ourservices/ourservices.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurservicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
