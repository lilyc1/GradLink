import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  newMessage: string = '';

  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageSent.emit(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
