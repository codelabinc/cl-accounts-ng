import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { App, Permission } from '../../model/app-model';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { AppPermissionService } from '../../services/app-permission.service';
import { AppsService } from '../../services/apps.service';
import { AppConfirmService } from 'app/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.css']
})
export class PermissionFormComponent implements OnInit {

  @Input() app: App;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Output() onSave: EventEmitter<string> = new EventEmitter();
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  constructor(private appPermissionService: AppPermissionService,
    private appConfirmService: AppConfirmService,
    private appService: AppsService) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.onSave.emit(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item: Permission): void {
    this.appConfirmService.confirm('Confirm your Action', 'Are you Sure you want to Delete ' + name + ' Permission?').subscribe(response => {
      if (response) {
        this.onDelete.emit(item.name);
      }
    });

  }


}
