import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatDividerModule, MatSelectModule, MatTabsModule, MatCardModule, MatChipsModule, MatListModule, MatAutocompleteModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({

    imports: [
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatIconModule,
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
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatAutocompleteModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
        MatMenuModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatListModule
    ]
})
export class MaterialModule { }