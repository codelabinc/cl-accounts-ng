import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { AppDataSource } from '../../datasource/app-data-source';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['status', 'name', 'code', 'dateCreated', 'action'];

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort !: MatSort;
  // nameFilter = new FormControl('');
  // codeFilter = new FormControl('');

  dataSource: AppDataSource;

  constructor(private appService: AppsService) { }

  ngOnInit() {
    this.dataSource = new AppDataSource(this.appService);
    this.dataSource.loadUsers({ page: 0, size: 10});
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // this.nameFilter.valueChanges
    //   .pipe(
    //     debounceTime(15),
    //     distinctUntilChanged(),
    //     tap((value) => {
    //       this.paginator.pageIndex = 0;
    //       this.onPage({ name: value });
    //     })
    //   ).subscribe();

    // this.codeFilter.valueChanges
    //   .pipe(
    //     debounceTime(15),
    //     distinctUntilChanged(),
    //     tap((value) => {
    //       this.paginator.pageIndex = 0;
    //       this.onPage({ code: value });
    //     })
    //   ).subscribe();

    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     tap(() => this.onPage({}))
    //   )
    //   .subscribe();

  }

  onPage(filter: any) {
    filter.page = this.paginator.pageIndex;
    filter.size = this.paginator.pageSize;
    this.dataSource.loadUsers(filter);
  }

}
