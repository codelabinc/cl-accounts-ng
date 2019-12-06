import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, of, Observable, fromEvent } from 'rxjs';
import { startWith, switchMap, map, catchError, delayWhen, debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../model/account';
import { Page } from '../../../../model/page/page';
import { AccountDataSource } from '../../datasource/account-data-source';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'code', 'type', 'status', 'dateCreated'];

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort !: MatSort;
  nameFilter = new FormControl('');
  codeFilter = new FormControl('');

  filterValues = {
    name: '',
    code: ''
  };

  dataSource: AccountDataSource;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.dataSource = new AccountDataSource(this.accountService);
    this.dataSource.loadAccounts({ page: 0, size: 10 });
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.nameFilter.valueChanges
      .pipe(
        debounceTime(15),
        distinctUntilChanged(),
        tap((value) => {
          this.paginator.pageIndex = 0;
          this.onPage({ name: value });
        })
      ).subscribe();

    this.codeFilter.valueChanges
      .pipe(
        debounceTime(15),
        distinctUntilChanged(),
        tap((value) => {
          this.paginator.pageIndex = 0;
          this.onPage({ code: value });
        })
      ).subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.onPage({}))
      )
      .subscribe();

  }

  onPage(filter: any) {
    filter.page = this.paginator.pageIndex;
    filter.size = this.paginator.pageSize;
    this.dataSource.loadAccounts(filter);
  }

}

