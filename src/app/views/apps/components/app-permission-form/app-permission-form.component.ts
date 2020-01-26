import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { App, Permission } from '../../model/app-model';
import { AppConfirmService } from 'app/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-app-permission-form',
  templateUrl: './app-permission-form.component.html',
  styleUrls: ['./app-permission-form.component.css']
})
export class AppPermissionFormComponent implements OnInit {

  customErrors = { required: 'Field is required' }
  doForm: FormGroup;
  @Input() app: App;

  @Output() onAdd: EventEmitter<string> = new EventEmitter();
  @Output() onDelete: EventEmitter<{ role: string, name: string }> = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
    private appConfirmService: AppConfirmService) { }

  ngOnInit() {
    this.doForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  onSaveClick() {
    if (this.doForm.invalid) {
      return;
    }
    this.onAdd.emit(this.doForm.value);
  }

  onDeleteClick(permission: Permission) {
    this.appConfirmService.confirm('Confirm your Action', 'Are you Sure you want to Delete ' + permission.name + ' Permission?').subscribe(response => {
      if (response) {
        let data = { role: this.doForm.get('role').value, name: permission.name };
        this.onDelete.emit(data);
      }
    });
  }

  getPermissions() {
    if (!this.doForm.get('role').value) {
      return [];
    }
    return this.app.permissions.filter(it => it.role.name === this.doForm.get('role').value);
  }

}
