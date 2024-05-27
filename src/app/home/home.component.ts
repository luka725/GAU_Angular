import { Component } from '@angular/core';
import { OurservicesComponent } from '../ourservices/ourservices.component';
import { TeamComponent } from '../team/team.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurservicesComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
