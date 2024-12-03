import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { DatabaseService } from 'backend/database.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit{
  userProfile: any; // Object to hold profile data
  userId: string | null = '';
  @Input() gradClass: string | null = null;
  @Input() majorId: string | null = null;
  @Input() currentChannel: string | null = null;

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

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() && this.gradClass && this.majorId && this.currentChannel) {
      const path = `${this.gradClass}/${this.majorId}/${this.currentChannel}/messages`;
      const newMessageData = {
        sender: this.userProfile.firstName,  // Replace with actual user info
        text: this.newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      this.dbService.addData(path, newMessageData).then(() => {
        this.newMessage = ''; // Clear input field
      }).catch(error => {
        console.error('Error sending message:', error);
      });
    }
  }
}
