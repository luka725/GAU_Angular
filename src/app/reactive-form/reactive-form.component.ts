import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  simpleForm:FormGroup = new FormGroup({
    Name : new FormControl("")
  })
  formSubmit(){
    console.log(this.simpleForm.value);
  }
}