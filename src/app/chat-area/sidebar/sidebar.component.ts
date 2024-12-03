import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'backend/database.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit { 
  majorId: string | null = null;
  gradClass: string | null = null;
  currentChannel: string | null = null;
  channels: string[] = [];
  directMessages = ['Alice', 'Bob', 'Charlie'];

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) {}

  ngOnInit() {
    // Subscribe to URL changes to dynamically fetch and highlight the correct channel
    this.route.paramMap.subscribe(params => {
      this.majorId = params.get('major');
      this.currentChannel = params.get('channel'); // Fetch the channel from the URL
      this.gradClass = params.get('gradClass');

      if (this.majorId) {
        this.loadChannels(this.majorId);
      }
    });
  }

  loadChannels(major: string) {
    const path = `${this.gradClass}/${major}/channels`;
    this.dbService.getData(path).subscribe((channels: any) => {
      this.channels = channels;
    });
  }
}
