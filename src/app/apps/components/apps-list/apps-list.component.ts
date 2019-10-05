import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'app/material.module';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'environments/environment.prod';
import { AppService } from 'app/apps/services/app.service';
import { filter, takeUntil, map } from 'rxjs/operators';
import { App } from 'app/model/app';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'app/model/page/page';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {


  doForm: FormGroup;

  working: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(MaterialModule: MaterialModule,
    private appService: AppService,
    private formBuilder: FormBuilder) { }
  displayedColumns: string[] = ['sno', 'name', 'code', 'accountType', 'dateCreated'];
  dataSource = new MatTableDataSource<App>([]);
  isLoading;


  ngOnInit() {
    this.doForm = this.formBuilder.group({
      page: 0,
      size: 10
    });
    this.fetchData();
  }

  getFilter() {
    return this.doForm.value;
  }

  fetchData() {
    console.log('isLoading', this.isLoading);
    this.isLoading = true;
    this.appService.search<App>(this.getFilter()).pipe(
    ).subscribe((page: Page<App>) => {
      console.log(page);
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<App>(page.content);
    });
  }

  onPage(page: PageEvent) {
    this.doForm.patchValue({page: page.pageIndex, size: page.pageSize});
    this.fetchData();
  }
}
