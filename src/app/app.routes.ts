import { AccountListComponent } from './accounts/components/account-list/account-list.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: AuthLayoutComponent,
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
    canActivate: [AuthService],
    children: [
      {
        path: 'dashboard', 
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
        data: { title: 'Dashboard Blank', breadcrumb: 'DASHBOARD'}
      },
      {
        path: 'apps', 
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule), 
        data: { title: 'Apps', breadcrumb: 'Apps'}
      },
      {
        path: 'accounts', 
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule), 
        data: { title: 'Accounts', breadcrumb: 'Accounts'}
      },
      {
        path: 'users', 
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule), 
        data: { title: 'Users', breadcrumb: 'Users'}
      }
    ]
  },

  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];