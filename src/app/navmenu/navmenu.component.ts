import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {

}
