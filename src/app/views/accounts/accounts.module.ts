import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule, MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [AccountsListComponent, NewAccountComponent, AccountFormComponent],
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
    MatSelectModule,
    FormsModule,
    MatMenuModule
  ]
})
export class AccountsModule { }
