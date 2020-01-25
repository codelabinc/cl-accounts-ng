import { Component, OnInit, Input } from '@angular/core';
import { App } from '../../model/app-model';
import { RoleService } from '../../services/role.service';
import { MatSnackBar } from '@angular/material';
import { AppsService } from '../../services/apps.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-app-role',
  templateUrl: './app-role.component.html',
  styleUrls: ['./app-role.component.css']
})
export class AppRoleComponent implements OnInit {

  @Input() app: App;
  constructor(
  private roleService: RoleService,
  private appService: AppsService,
  private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  handleSaveEvent($event) {
    this.roleService.createRole(this.app.code, $event).subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.app = app;
        this.snackBar.open('Role Created', 'Dismiss');
      });
    }, err => {
      this.snackBar.open('Could not create Role at the moment', 'Dismiss');
    })
  }

  handleDeleteEvent($event) {
    this.roleService.deleteRole(this.app.code, $event).subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.app = app;
        this.snackBar.open('Role Deleted', 'Dismiss');
      });
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.snackBar.open(err.error.message, 'Dismiss');
    })
  }

}
