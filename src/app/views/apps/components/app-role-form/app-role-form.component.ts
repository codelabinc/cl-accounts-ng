import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { App } from '../../model/app-model';
import { AppConfirmService } from 'app/services/app-confirm/app-confirm.service';
import { ClValidators } from 'app/validators/cl-validators';

@Component({
  selector: 'app-app-role-form',
  templateUrl: './app-role-form.component.html',
  styleUrls: ['./app-role-form.component.css']
})
export class AppRoleFormComponent implements OnInit {

  doForm: FormGroup;
  customErrors = { required: 'Field is required', whitespace: 'Whitespace not allowed' }
  @Input() app: App;

  @Output() onSave: EventEmitter<string> = new EventEmitter();
  @Output() onDelete: EventEmitter<string> = new EventEmitter();


  constructor(private fb: FormBuilder,
    private appConfirmService: AppConfirmService) { }

  ngOnInit() {
    this.doForm = this.fb.group({
      name: ['', [Validators.required, ClValidators.noWhitespaceValidator]]
    })
  }

  onSaveClick() {
    if (!this.doForm.valid) {
      return;
    }
    this.onSave.emit(this.doForm.value);
    this.doForm.reset();
  }

  onDeleteClick(name: string) {
    this.appConfirmService.confirm('Confirm your Action', 'Are you Sure you want to Delete ' + name + 'Role?').subscribe(response => {
      if(response) {
        this.onDelete.emit(name);
      }
    })
  }

}
