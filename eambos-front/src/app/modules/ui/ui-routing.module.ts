import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayoutComponent } from './layouts/ui-layout/ui-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent,
    children: [
      {
        path: 'inicio',
        component: HomePageComponent,
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
