import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  @Input() messages: { username: string; content: string; timestamp: string }[] =
    [];
}
