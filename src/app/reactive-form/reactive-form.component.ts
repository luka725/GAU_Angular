import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  constructor(private formBuilder:FormBuilder){}
  OnInit(){
    this.simpleForm = this.formBuilder.group({
      Name:["", Validators.required]
    })
  }
  simpleForm:FormGroup = new FormGroup({
    Name : new FormControl("")
  })
  formSubmit(){
    console.log(this.simpleForm.value);
  }
}