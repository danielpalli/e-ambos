import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignupPageComponent,
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
