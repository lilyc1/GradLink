import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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

  @Output() sentMessage = new EventEmitter<Message>();

  send(content: string) {
    const newMessage: Message = {
      username: this.userProfile.firstName, // Replace with actual username logic
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    this.sentMessage.emit(newMessage); // Emit valid Message object
  }
}

export interface Message {
  username: string;
  content: string;
  timestamp: string;
}
