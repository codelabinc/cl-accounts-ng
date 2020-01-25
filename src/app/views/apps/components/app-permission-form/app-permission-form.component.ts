import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-permission-form',
  templateUrl: './app-permission-form.component.html',
  styleUrls: ['./app-permission-form.component.css']
})
export class AppPermissionFormComponent implements OnInit {

  customErrors = { required: 'Field is required' }
  doForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.doForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  onSaveClick(){
    
  }

}
