import { Component, OnInit, Input } from '@angular/core';
import { App } from '../../model/app-model';
import { PermissionService } from '../../services/permission.service';
import { MatSnackBar } from '@angular/material';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-permission',
  templateUrl: './app-permission.component.html',
  styleUrls: ['./app-permission.component.css']
})
export class AppPermissionComponent implements OnInit {

  @Input() app: App;
  constructor(private permissionService: PermissionService,
    private snackBar: MatSnackBar,
    private appService: AppsService) { }

  ngOnInit() {
    this.appService.getByCode(this.app.code).subscribe(app => {
      this.app = app;
    });
  }

  handleAddEvent($event: {role: string, name: string}) {
    this.permissionService.addPermission(this.app.code, $event.role, $event.name)
    .subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.app = app;
        this.snackBar.open('Permission Added', 'Dismiss');
      });
    }, err => {
      this.snackBar.open('Could not add Permission at the moment', 'Dismiss');
    })
  }

  handleDeleteEvent($event: {role: string, name: string}) {
    this.permissionService.deletePermission(this.app.code, $event.role, $event.name).subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.app = app;
        this.snackBar.open('Permission Deleted', 'Dismiss');
      });
    }, err => {
      this.snackBar.open('Could not Delete Permission at the moment', 'Dismiss');
    })
  }

}
