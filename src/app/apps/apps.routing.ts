import { CreateNewAppComponent } from './components/create-new-app/create-new-app.component';
import { Routes } from '@angular/router';

import { AppsListComponent } from './components/apps-list/apps-list.component'

export const routes: Routes = [
  {
    path: '',
    component: AppsListComponent
  },
  {
    path: 'new',
    component: CreateNewAppComponent,
    data: { title: 'New Apps', breadcrumb: 'New'}
  }
];