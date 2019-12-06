import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    AccountsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
