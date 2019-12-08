import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatProgressSpinnerModule, MatPaginatorModule, MatSortModule,
  MatInputModule, MatTableModule, MatButtonModule, MatIconModule,
  MatDividerModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserListComponent],
  imports: [
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
    UsersRoutingModule
  ]
})
export class UsersModule { }
