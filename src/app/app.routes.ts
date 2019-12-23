import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyLoggedInGuard } from './guards/already-logged-in.guard';


export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    canActivate: [AlreadyLoggedInGuard],
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users', 
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule), 
        data: { title: 'Users', breadcrumb: 'USERS'}
      },
      {
        path: 'apps', 
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule), 
        data: { title: 'Apps', breadcrumb: 'APPS'}
      },
      {
        path: 'accounts', 
        loadChildren: () => import('./views/accounts/accounts.module').then(m => m.AccountsModule), 
        data: { title: 'Accounts', breadcrumb: 'ACCOUNTS'}
      },
      {
        path: 'dashboard', 
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule), 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
    
    ]
  },

  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];