import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'backend/database.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit{
  currentChannel: string | null = null; // Default channel
  majorId: string | null = null;
  gradClass: string | null = null;
  messages: any[] = [];

  constructor(private route: ActivatedRoute, private dbService: DatabaseService) {}

  loadMessages() {
    const path = `${this.gradClass}/${this.majorId}/${this.currentChannel}/messages`;
    this.dbService.getData(path).subscribe((messages: any) => {
      this.messages = messages ? Object.values(messages) : [];
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.majorId = params.get('major'); // Read major from the URL
      this.currentChannel = params.get('channel'); // Read channel from the URL
      this.gradClass = params.get('gradClass');
      if (this.majorId && this.currentChannel) {
        this.loadMessages(); // Load messages for the current channel
      }
    });
  };
}