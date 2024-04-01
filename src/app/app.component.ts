import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDrivenFormComponentComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular1';
}
