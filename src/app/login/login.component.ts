import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string | null = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  onSubmit() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.loginError = null; // Clear error on success
        console.log('Login successful!');
        // Redirect or handle successful login here
        this.router.navigate(['/home-page']);
      })
      .catch(error => {
        this.loginError = error.message; // Display error message
        console.error('Login failed', error);
      });
  }
}
