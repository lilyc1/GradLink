import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css']
})
export class ChatContentComponent {
  // messages = [
  //   { username: 'Alice', content: 'Hello, everyone!', timestamp: '10:00 AM' },
  //   { username: 'Bob', content: 'Hi Alice!', timestamp: '10:02 AM' },
  //   { username: 'Charlie', content: 'Good morning!', timestamp: '10:05 AM' }
  // ];

  // addMessage(content: string) {
  //   this.messages.push({
  //     username: 'You', // You can replace this with a logged-in user dynamically
  //     content,
  //     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //   });
  // }

  @Input() messages: { username: string; content: string; timestamp: string }[] =
    [];
  @Input() activeChannel: string = '';

  @Output() sentMessage = new EventEmitter<{
    username: string;
    content: string;
    timestamp: string;
  }>();

  // Emit the new message to the parent
  sendMessage(message: { username: string; content: string; timestamp: string }) {
    this.sentMessage.emit(message);
  }
}
