import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule,
  MatSlideToggleModule, MatGridListModule, MatChipsModule, MatCheckboxModule, MatRadioModule,
  MatTabsModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonPipesModule } from 'app/pipes/common/common-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    FileUploadModule,
    CommonPipesModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxDatatableModule

  ]
})
export class DashboardModule { }
