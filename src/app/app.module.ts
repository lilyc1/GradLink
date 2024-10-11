import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomePageComponent } from './home-page/home-page.component';
import { Grad2022Component } from './grad2022/grad2022.component';
import { Grad2023Component } from './grad2023/grad2023.component';
import { Grad2024Component } from './grad2024/grad2024.component';
import { Grad2025Component } from './grad2025/grad2025.component';
import { Grad2026Component } from './grad2026/grad2026.component';
import { MajorSelectionComponent } from './major-selection/major-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Grad2022Component,
    Grad2023Component,
    Grad2024Component,
    Grad2025Component,
    Grad2026Component,
    MajorSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
