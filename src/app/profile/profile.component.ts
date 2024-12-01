import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { DatabaseService } from 'backend/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Object to hold profile data
  userId: string | null = '';

  constructor(
    private authService: AuthService,
    private dbService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.userId = user.uid;
        this.dbService.getUserProfile(this.userId).subscribe((profile) => {
          this.userProfile = profile; // Assign fetched profile data
        });
      }
    });
  }
}
