import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form-component.component.html',
  styleUrl: './template-driven-form-component.component.css'
})
export class TemplateDrivenFormComponentComponent {
  usr={
    name: "Lukinioo"
  }
  SaveInput(form:any){
    console.log(form.value)
  }
}
