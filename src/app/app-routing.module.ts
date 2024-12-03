import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grad2022Component } from './grad2022/grad2022.component';
import { Grad2023Component } from './grad2023/grad2023.component';
import { Grad2024Component } from './grad2024/grad2024.component';
import { Grad2025Component } from './grad2025/grad2025.component';
import { Grad2026Component } from './grad2026/grad2026.component';
import { HomePageComponent } from './start-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MajorSelectionComponent } from './major-selection/major-selection.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'grad2022', component: Grad2022Component},
  { path: 'grad2023', component: Grad2023Component },
  { path: 'grad2025', component: Grad2025Component },
  { path: 'grad2026', component: Grad2026Component },
  { path: 'grad2024', component: Grad2024Component },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'major-selection', component: MajorSelectionComponent },
  { path: 'chat', component: ChatAreaComponent },
  { path: ':gradClass/:major/:channel', component: ChatAreaComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
