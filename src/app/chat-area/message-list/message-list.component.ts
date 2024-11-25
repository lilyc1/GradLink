import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages = [
    { username: 'Alice', content: 'Hello, everyone!', timestamp: '10:00 AM' },
    { username: 'Bob', content: 'Hi Alice!', timestamp: '10:02 AM' },
    { username: 'Charlie', content: 'Good morning!', timestamp: '10:05 AM' }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        username: 'You', // You can dynamically set this based on the logged-in user
        content: this.newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.newMessage = '';
    }
  }
}
