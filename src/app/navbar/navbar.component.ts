import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isSignedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.isSignedIn = !!user; // True if user is signed in, false otherwise
    });
  }

  logout() {
    this.authService.logout();
  }
}
