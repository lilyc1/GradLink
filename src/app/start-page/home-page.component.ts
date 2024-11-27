import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth'; // Import firebase auth

@Component({
  selector: 'app-start-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    // Check if user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      this.isLoggedIn = !!user; // true if user exists, false otherwise
    });
  }

  navigateToLogin() {
    // Navigate to login page
    window.location.href = '/login'; // Adjust route based on your app's structure
  }
}