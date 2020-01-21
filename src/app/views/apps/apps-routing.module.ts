import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppConfigurationComponent } from './components/app-configuration/app-configuration.component';


const routes: Routes = [
  { path: '', component: AppListComponent },
  {
    path: ':code', component: AppConfigurationComponent,
    data: { title: 'Configuration', breadcrumb: 'Configuration' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
