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
  isEditing: boolean = false;

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

  editProfile(): void {
    this.isEditing = true; // Enter edit mode
  }

  cancelEdit(): void {
    this.isEditing = false; // Exit edit mode without saving
  }

  saveProfile(): void {
    if (this.userId) {
      this.dbService.updateUserProfile(this.userId, {
        city: this.userProfile.city,
        state: this.userProfile.state,
        linkedIn: this.userProfile.linkedIn
      }).then(() => {
        this.isEditing = false; // Exit edit mode after saving
        //alert('Profile updated successfully!');
      }).catch((error) => {
        console.error('Error updating profile:', error);
      });
    }
  }
}
