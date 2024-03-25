import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
