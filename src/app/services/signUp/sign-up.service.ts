import { Injectable } from '@angular/core';
import { signUp } from 'src/app/models/signUp';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  saveSignUpData(signUpData: signUp): Observable<any> {
    return this.http.post('/api/User/SignUp', signUpData);
  }
}
