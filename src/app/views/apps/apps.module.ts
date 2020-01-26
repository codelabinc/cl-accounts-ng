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
import { CommonDirectivesModule } from 'app/directives/common/common-directives.module';
import { ControlErrorModule } from 'app/control-error/control-error.module';
import { AppPermissionComponent } from './components/app-permission/app-permission.component';
import { AppPermissionFormComponent } from './components/app-permission-form/app-permission-form.component';
import { AppRoleComponent } from './components/app-role/app-role.component';
import { AppRoleFormComponent } from './components/app-role-form/app-role-form.component';
import { AppPermissionMasterListComponent } from './components/app-permission-master-list/app-permission-master-list.component';
import { PermissionFormComponent } from './components/permission-form/permission-form.component';


@NgModule({
  declarations: [AppListComponent, AppConfigurationComponent, AppInfoComponent, AppWebHookComponent,
    AppWebHookFormComponent, AppPermissionComponent, AppPermissionFormComponent, AppRoleComponent,
    AppRoleFormComponent, AppPermissionMasterListComponent, PermissionFormComponent],
  imports: [
    CommonModule,
    CommonPipesModule,
    MaterialModule,
    AppsRoutingModule,
    NgxJsonViewerModule,
    CommonDirectivesModule,
    ControlErrorModule
  ]
})
export class AppsModule { }
