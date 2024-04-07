import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavmenuComponent, ContactComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
