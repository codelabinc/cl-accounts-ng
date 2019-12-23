import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppListComponent } from './components/app-list/app-list.component';
import { MatProgressSpinnerModule, MatInputModule, MatTableModule, MatIconModule, MatDividerModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppListComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
