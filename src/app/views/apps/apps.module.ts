import { NgModule } from '@angular/core';

import { AppsRoutingModule } from './apps-routing.module';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppConfigurationComponent } from './components/app-configuration/app-configuration.component';
import { MaterialModule } from 'app/material.module';
import { AppInfoComponent } from './components/app-info/app-info.component';
import { CommonModule } from '@angular/common';
import { AppWebHookComponent } from './components/app-web-hook/app-web-hook.component';
import { AppWebHookFormComponent } from './components/app-web-hook-form/app-web-hook-form.component';
import { CommonPipesModule } from 'app/pipes/common/common-pipes.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';



@NgModule({
  declarations: [AppListComponent, AppConfigurationComponent, AppInfoComponent, AppWebHookComponent, AppWebHookFormComponent],
  imports: [
    CommonModule,
    CommonPipesModule,
    MaterialModule,
    AppsRoutingModule,
    NgxJsonViewerModule
  ]
})
export class AppsModule { }
