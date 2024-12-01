import { Component, inject, OnInit } from '@angular/core';
import { DatabaseService } from 'backend/database.service'
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

function passwordMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;
  if (password !== confirmPassword) {
    formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    formGroup.get('confirmPassword')?.setErrors(null);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],


})

export class SignUpComponent implements OnInit {
  firstName!: FormGroup;
  lastName!: FormGroup;
  email!: FormGroup;
  password!: FormGroup;
  confirmPassword!: FormGroup;
  linkedIn!: FormGroup;
  city!: FormGroup;
  state!: FormGroup;
  passwordMismatch: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstName = new FormGroup({
      'firstCtrl': new FormControl('', Validators.required),
    });
    this.lastName = new FormGroup({
      'secondCtrl': new FormControl('', Validators.required),
    });
    this.email = new FormGroup({
      'thirdCtrl': new FormControl('', [Validators.required, Validators.email]),
    });
    this.password = new FormGroup({
      'fourthCtrl': new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
    this.confirmPassword = new FormGroup(
      {
        'fifthCtrl': new FormControl('', Validators.required),
      },
      
    );
    this.linkedIn = new FormGroup({
      'sixthCtrl': new FormControl(''),
    });
    this.city = new FormGroup({
      'seventhCtrl': new FormControl(''),
    });
    this.state = new FormGroup({
      'eighthCtrl': new FormControl(''),
    });
  }

  onSubmit() {

    if (this.firstName.valid && this.lastName.valid && this.email.valid && this.password.valid && this.confirmPassword.valid) {
      const email = this.email.value.thirdCtrl;
      const password = this.password.value.fourthCtrl;
      const firstName = this.firstName.value.firstCtrl;
      const lastName = this.lastName.value.secondCtrl;
      const linkedIn = this.linkedIn.value.sixthCtrl;
      const city = this.city.value.seventhCtrl;
      const state = this.state.value.eighthCtrl;

      // if (this.password !== this.confirmPassword) {
      //   this.passwordMismatch = true;
      //   return;
      // }
  
      // this.passwordMismatch = false; // Reset the flag if passwords match

      // Create user with Firebase Authentication
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // After successful sign-up, store the user's data in Firebase Realtime Database
          const user = userCredential.user;
          if (user) {
            // User profile data to be stored in Firebase Realtime Database
            const userProfile = {
              firstName,
              lastName,
              linkedIn,
              city,
              state,
            };

            // Store the profile data under the user's unique ID
            this.db
              .object(`users/${user.uid}`)
              .set(userProfile)
              .then(() => {
                console.log('User profile created successfully!');
                // Optionally, navigate to a different page after sign-up
                this.router.navigate(['/dashboard']);
              })
              .catch((error) => {
                console.error('Error saving user profile:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error signing up:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }
}