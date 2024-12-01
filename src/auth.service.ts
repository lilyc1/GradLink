import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase,
    private router: Router
  ) {}
  
// Sign-up method
signUp(userData: { name: string; email: string; password: string }) {
  return this.afAuth.createUserWithEmailAndPassword(userData.email, userData.password)
    .then((result) => {
      console.log('User successfully signed up:', result);

      // Store additional user information in the database
      if (result.user) {
        this.saveUserData(result.user.uid, userData.name, userData.email);
      }

      this.router.navigate(['/login']); // Navigate to login or dashboard after sign up
    })
    .catch((error) => {
      console.error('Sign up error:', error.message);
    });
}

// Save additional user data to Firebase Database
private saveUserData(userId: string, name: string, email: string) {
  this.db.object(`/users/${userId}`).set({
    name: name,
    email: email
  })
  .then(() => {
    console.log('Additional user data saved successfully!');
  })
  .catch((error) => {
    console.error('Error saving additional user data:', error);
  });
}

// Login method 
login(email: string, password: string) {
  return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('User successfully logged in:', result);
      this.router.navigate(['/dashboard']); // Navigate to dashboard after login
    })
    .catch((error) => {
      console.error('Login error:', error.message);
    });
}

// Logout method 
logout() {
  return this.afAuth.signOut()
    .then(() => {
      console.log('User successfully logged out');
      this.router.navigate(['/home']); // Navigate back to login page
    });
}

// Fetch the current user profile data
getUserProfile(uid: string) {
  return this.db.object(`users/${uid}`).valueChanges();
}

// Get current user info from Firebase Authentication
getCurrentUser() {
  return this.afAuth.authState; // Observable that tracks the currently signed-in user
}
}