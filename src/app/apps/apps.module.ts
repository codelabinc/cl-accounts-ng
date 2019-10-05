import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './apps.routing';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonPipesModule } from 'app/pipes/common/common-pipes.module';
import { MaterialModule } from 'app/material.module';
import { CreateNewAppComponent } from './components/create-new-app/create-new-app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';




@NgModule({
  declarations: [AppsListComponent, CreateNewAppComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ChartsModule,
    FileUploadModule,
    CommonPipesModule,
    MaterialModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    RouterModule.forChild(routes)


  ]
})
export class AppsModule { }
