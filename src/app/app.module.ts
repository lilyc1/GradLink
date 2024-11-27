import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HomePageComponent } from './start-page/home-page.component';
import { Grad2022Component } from './grad2022/grad2022.component';
import { Grad2023Component } from './grad2023/grad2023.component';
import { Grad2024Component } from './grad2024/grad2024.component';
import { Grad2025Component } from './grad2025/grad2025.component';
import { Grad2026Component } from './grad2026/grad2026.component';
import { MajorSelectionComponent } from './major-selection/major-selection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { environment } from '../../backend/environments/environment';
import { SignUpBasicComponent } from './sign-up/sign-up-basic/sign-up-basic.component';
import { SignUpProfileComponent } from './sign-up/sign-up-profile/sign-up-profile.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { ChatContentComponent } from './chat-area/chat-content/chat-content.component';
import { MessageInputComponent } from './chat-area/chat-content/message-input/message-input.component';
import { MessageListComponent } from './chat-area/chat-content/message-list/message-list.component';
import { SidebarComponent } from './chat-area/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Grad2022Component,
    Grad2023Component,
    Grad2024Component,
    Grad2025Component,
    Grad2026Component,
    MajorSelectionComponent,
    NavbarComponent,
    HomeComponent,
    AboutPageComponent,
    LoginComponent,
    SignUpComponent,
    ChatAreaComponent,
    SidebarComponent,
    MessageListComponent,
    MessageInputComponent,
    ChatContentComponent,
    SignUpBasicComponent,
    SignUpProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
