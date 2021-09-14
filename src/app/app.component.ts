import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userPersonalData: new FormGroup({
        username: new FormControl('Afolabi Oluseun Opakunle', [Validators.required]),
        email: new FormControl('oranmiyan@gmail.com', [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
  }

  saveForm() {
    console.log(this.signUpForm);
  }

  addFood() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(control)
  }
}
