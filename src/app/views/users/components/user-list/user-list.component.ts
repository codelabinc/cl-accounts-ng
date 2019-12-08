import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserDataSource } from '../../datasource/user-data-source';
import { PortalUserService } from '../../services/portal-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['status', 'name', 'username', 'email', 'phoneNumber', 'hasEverLoggedIn', 'dateCreated', 'action'];

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort !: MatSort;
  // nameFilter = new FormControl('');
  // codeFilter = new FormControl('');

  dataSource: UserDataSource;

  constructor(private portalUserService: PortalUserService) { }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.portalUserService);
    this.dataSource.loadUsers({ page: 0, size: 10, 'portalUser.authenticationType': 'IDENTIFIER_PASSWORD_CREDENTIALS' });
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
