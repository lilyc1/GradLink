import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  channels = ['General', 'Jobs', 'Networking'];
  directMessages = ['Alice', 'Bob', 'Charlie'];

  addChannel() {
    const newChannel = prompt('Enter new channel name:');
    if (newChannel) this.channels.push(newChannel);
  }
}
