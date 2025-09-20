import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then(t => t.TestModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

