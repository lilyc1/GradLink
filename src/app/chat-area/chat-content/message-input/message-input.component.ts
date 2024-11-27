import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  @Output() sentMessage = new EventEmitter<Message>();

  send(content: string) {
    const newMessage: Message = {
      username: 'You', // Replace with actual username logic
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
