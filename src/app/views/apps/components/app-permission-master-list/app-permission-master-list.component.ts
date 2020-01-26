import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { App } from '../../model/app-model';
import { AppPermissionService } from '../../services/app-permission.service';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-permission-master-list',
  templateUrl: './app-permission-master-list.component.html',
  styleUrls: ['./app-permission-master-list.component.css']
})
export class AppPermissionMasterListComponent implements OnInit {

  @Input() app: App;

  @Output() onDataChange: EventEmitter<App> = new EventEmitter();
  constructor(private appPermissionService: AppPermissionService,
    private appService: AppsService) { }

  ngOnInit() {
  }

  handleSaveEvent($event: string) {
    this.appPermissionService.addPermission(this.app.code, $event).subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.onDataChange.emit(it);
        this.app = app;
      });
    });
  }

  handleDeleteEvent($event: string) {
    this.appPermissionService.deletePermission(this.app.code, $event).subscribe(it => {
      this.appService.getByCode(this.app.code).subscribe(app => {
        this.onDataChange.emit(app);
        this.app = app;
      });
    })
  }

}
