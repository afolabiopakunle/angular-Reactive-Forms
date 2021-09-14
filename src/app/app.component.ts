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
      username: new FormControl('Afolabi Oluseun Opakunle'),
      email: new FormControl('afolabi@gmail.com', [Validators.required]),
      gender: new FormControl('male')
    })
  }

  saveForm() {
    console.log(this.signUpForm);

  }
}
