import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { DocumentComponent } from '../components/document/document.component';
import {MainLayoutComponent} from '../components/main-layout/main-layout.component';
import {MainPageComponent} from '../components/main-page/main-page.component';
import {AuthGuardService} from './auth-guard.service';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {WelcomePageComponent} from '../components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component:  WelcomePageComponent },
      { path: 'login', component:  LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path: 'start', component: MainPageComponent, canActivate: [AuthGuardService]  },
      {path: 'document/:id', component: DocumentComponent}

    ] },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
