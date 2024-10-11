import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grad2022Component } from './grad2022/grad2022.component';
import { Grad2023Component } from './grad2023/grad2023.component';
import { Grad2024Component } from './grad2024/grad2024.component';
import { Grad2025Component } from './grad2025/grad2025.component';
import { Grad2026Component } from './grad2026/grad2026.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  { path: 'grad2022', component: Grad2022Component},
  { path: 'grad2023', component: Grad2023Component },
  { path: 'grad2025', component: Grad2025Component },
  { path: 'grad2026', component: Grad2026Component },
  { path: 'grad2024', component: Grad2024Component },
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
