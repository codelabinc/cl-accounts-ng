import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable } from 'rxjs';
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
import { AccountsService } from '../../services/accounts.service';
import { AccountDataSource } from '../../datasource/account-data-source';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterRecordService } from '../../../../services/master-record.service';
import { Country, State, SelectUi } from 'app/model/master-records';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['status', 'name', 'code', 'type', 'dateCreated', 'action'];

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort !: MatSort;
  nameFilter = new FormControl('');
  codeFilter = new FormControl('');

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

  appsFilterChanged($event) {
    const apps: SelectUi[] = $event;
    const filter = {'app.code': apps.map(x=> x.value)};
    this.onPage(filter);
  }

}

