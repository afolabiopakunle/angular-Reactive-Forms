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
      bestFoods: new FormArray([new FormControl(null, Validators.required)])
    })
  }

  saveForm() {
    console.log(this.signUpForm);
    this.signUpForm.reset()
  }

  addFood() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('bestFoods') as FormArray).push(control);
    
  }

  removeFood(i) {
    (this.signUpForm.get('bestFoods') as FormArray).removeAt(i)
  }
}
