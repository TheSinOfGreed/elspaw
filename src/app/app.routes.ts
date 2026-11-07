import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Elspaw',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'realizacje',
    title: 'Elspaw – Realizacje',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'kontakt',
    title: 'Elspaw – Kontakt',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
