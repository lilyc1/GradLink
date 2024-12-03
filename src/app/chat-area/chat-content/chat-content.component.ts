import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css']
})
export class ChatContentComponent {
  @Input() messages: any[] = [];
  @Input() currentChannel: string | null = null;
  @Input() gradClass: string | null = null;
  @Input() majorId: string | null = null;
}
