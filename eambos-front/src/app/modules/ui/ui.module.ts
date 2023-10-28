import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiLayoutComponent } from './layouts/ui-layout/ui-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    UiLayoutComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
