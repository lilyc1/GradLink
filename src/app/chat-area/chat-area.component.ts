import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  activeChannel: string = 'General'; // Default channel
  channels = ['General', 'Jobs', 'Networking']; // List of channels

  // Function to switch the active channel
  switchChannel(channel: string) {
    this.activeChannel = channel;
  }

  // Store messages for each channel
  messages: Messages = {
    General: [{
      username: 'Alice',
      content: 'Hey everyone, welcome to the General channel!',
      timestamp: '10:00 AM',
    },
    {
      username: 'Bob',
      content: 'Good morning! How’s everyone doing today?',
      timestamp: '10:02 AM',
    },],
    Jobs: [{
      username: 'Charlie',
      content: 'Does anyone know of any openings for junior developers?',
      timestamp: '2024-11-25T09:30:00Z',
    },
    {
      username: 'Alice',
      content: 'Check out the Careers page on our company website!',
      timestamp: '2024-11-25T09:35:00Z',
    },],
    Networking: [],
  };

  onMessageSent(newMessage: Message) {
    this.messages[this.activeChannel].push(newMessage);
  }
  
}

interface Message {
  username: string;
  content: string;
  timestamp: string;
}

// Define the messages for all channels
type Messages = {
  [channel: string]: Message[];
};
