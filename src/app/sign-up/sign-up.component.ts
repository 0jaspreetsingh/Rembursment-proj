import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createEmptySignUpForm();
  }

  createEmptySignUpForm(): void {
    this.form =this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      pan: new FormControl('', [Validators.required, Validators.minLength(10)]),
      bank: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      bankAccountnumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  update(): void {
    console.log('dudddu');
  }
}
