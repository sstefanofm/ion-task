import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./pages/view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

