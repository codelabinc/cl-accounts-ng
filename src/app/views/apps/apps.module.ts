import { NgModule } from '@angular/core';

import { AppsRoutingModule } from './apps-routing.module';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppConfigurationComponent } from './components/app-configuration/app-configuration.component';
import { MaterialModule } from 'app/material.module';
import { AppInfoComponent } from './components/app-info/app-info.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppListComponent, AppConfigurationComponent, AppInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
