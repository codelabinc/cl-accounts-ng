import { Component, OnInit, ViewChild, Input, Output, EventEmitter, QueryList, AfterViewInit } from '@angular/core';
import { MasterRecordService } from 'app/services/master-record.service';
import { FormBuilder, Form, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { EventNotification, App, WebHook } from '../../model/app-model';
import { MatSnackBar, MatSelectionList, MatListOption, MatSelectionListChange } from '@angular/material';
import { map } from 'rxjs/operators';
import { ClValidators } from 'app/validators/cl-validators';

@Component({
  selector: 'app-app-web-hook-form',
  templateUrl: './app-web-hook-form.component.html',
  styleUrls: ['./app-web-hook-form.component.css']
})
export class AppWebHookFormComponent implements OnInit, AfterViewInit {

  doForm: FormGroup;
  customErrors = { invalidUrl: 'Please enter a valid URL', required: 'Field is required' }
  @ViewChild('selectAllMatListOptionCtrl', { static: false }) selectAllMatListOptionCtrl: MatListOption;
  @ViewChild('eventsMatList', { static: false }) eventsMatList: MatSelectionList;
  @Input() app: App;
  @Input() selectedEvents: EventNotification[];
  eventsIsPristine = true;

  allEvents: EventNotification[] = [];

  @Output() onSubmit: EventEmitter<WebHook> = new EventEmitter();

  constructor(private masterRecordService: MasterRecordService,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.app.webHook) {
      this.doForm = this.formBuilder.group({
        testUrl: [this.app.webHook.testUrl, [Validators.required, ClValidators.urlValidator]],
        liveUrl: [this.app.webHook.liveUrl, [Validators.required, ClValidators.urlValidator]],
        events: this.formBuilder.array(this.selectedEvents.map(it => it.type))
      });
    } else {
      this.doForm = this.formBuilder.group({
        testUrl: ['', [Validators.required, ClValidators.urlValidator]],
        liveUrl: ['', [Validators.required, ClValidators.urlValidator]],
        events: this.formBuilder.array([])
      });
    }


    this.masterRecordService.getEventNotificationTypes()
      .pipe(
        map((result: EventNotification[]) => {
          return result.map((it: EventNotification) => {
            if (this.selectedEvents && this.selectedEvents.findIndex(x => x.type === it.type) !== -1) {
              it.selected = true;
            }
            return it;
          });
        })
      ).subscribe((it: EventNotification[]) => {
        this.allEvents = it;
      });

  }

  getEventsControl() {
    const eventArray = this.doForm.get('events') as FormArray
    return eventArray.controls;
  }

  onSaveClick() {
    if (!this.doForm.valid) {
      this.snackBar.open('Please fill all required fields', 'Dismiss');
      return;
    }
    const webHook: WebHook = this.doForm.value;
    this.onSubmit.emit(webHook);
  }

  get submitText() {
    return this.app.webHook ? 'Update': 'Save';
  }

  ngAfterViewInit(): void {
    this.eventsMatList.selectionChange.subscribe((it: MatSelectionListChange) => {
      this.eventsIsPristine = false;
      const eventArray = this.doForm.get('events') as FormArray;
      const elementIndex = eventArray.controls.findIndex(x => x.value === it.option.value);
      if (elementIndex != -1) {
        eventArray.removeAt(elementIndex);
      } else {
        eventArray.push(new FormControl(it.option.value));
      }
    })
  }

  get disabled() {
    return this.doForm.pristine && this.eventsIsPristine;
  }

}
