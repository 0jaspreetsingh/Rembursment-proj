import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { signUp } from '../models/signUp';
import { SignUpService } from '../services/signUp/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private signUpService: SignUpService) {}

  ngOnInit() {
    this.createEmptySignUpForm();
  }

  createEmptySignUpForm(): void {
    this.form = this.fb.group({
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

  signUp(): void {
    const signUpDetails: signUp = this.form.value;
    this.signUpService.saveSignUpData(signUpDetails).subscribe(data => {
      console.log(data);
    });
  }
}
