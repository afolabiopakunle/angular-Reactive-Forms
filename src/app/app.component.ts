import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('Afolabi Oluseun Opakunle', [Validators.required]),
      email: new FormControl('oranmiyan@gmail.com', [Validators.required, Validators.email]),
      gender: new FormControl('male')
    })
  }

  saveForm() {
    console.log(this.signUpForm);

  }
}
