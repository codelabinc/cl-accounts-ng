import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule, MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AccountsRoutingModule,
    FlexLayoutModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class AccountsModule { }
