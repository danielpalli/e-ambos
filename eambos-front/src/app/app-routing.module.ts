import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren : () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'eambos',
    loadChildren : () => import('./modules/ui/ui.module').then(m => m.UiModule)
  },
  {
    path: '**',
    redirectTo: 'eambos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
