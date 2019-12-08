import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MasterRecordService } from 'app/services/master-record.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { State, Country } from 'app/model/master-records';
import { Account } from '../../model/account';
import { map, filter } from 'rxjs/operators';
import { SelectUi } from '../../../../model/master-records';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  accountTypes$: Observable<SelectUi[]>;
  countries$: Observable<SelectUi[]>;
  states$: Observable<SelectUi[]>;

  doForm: FormGroup;

  @Input()
  account: Account;

  @Output()
  submitFired: EventEmitter<any> = new EventEmitter();

  @Input()
  working = false;

  constructor(private masterRecordService: MasterRecordService,
    private formBuilder: FormBuilder,private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.accountTypes$ = this.masterRecordService.getAccountTypes({}).pipe(
      map((values: string[]) => {
        return [{ name: '-CHOOSE-', value: '' }]
          .concat(values.filter(type => type === 'EXTERNAL_SYSTEM').map((type: string) => {
            return { name: type, value: type };
          }))
      })
    );

    this.countries$ = this.masterRecordService.getCountries({}).pipe(
      map((values: Country[]) => {
        return [{ name: '-CHOOSE-', value: undefined }]
          .concat(values.map((country: Country) => {
            return { name: country.name, value: country.alpha3 };
          }))
      })
    );

    this.doForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      accountType: ['', [Validators.required]],
      address: this.formBuilder.group({
        countryCode: ['', [Validators.required]],
        stateCode: ['', [Validators.required]],
        streetAddress: ['', [Validators.required]],
        houseNumber: ['', [Validators.required]]
      }),
      adminUser: this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(3)]]
      })
    });

    this.doForm.get('address.countryCode').valueChanges.pipe(
      filter(value => !!value)
    ).subscribe(value => {
      this.states$ = this.masterRecordService.getStates({countryCode: value}).pipe(
        map((values: State[]) => {
          return [{ name: '-CHOOSE-', value: undefined }]
            .concat(values.map((state: State) => {
              return { name: state.name, value: state.code };
            }))
        })
      )
    })
  }

  onSubmit() {
    if (!this.doForm.valid) {
      this.snackBar.open('Please fill all required fields', 'Dismiss');
      return;
    }
    this.submitFired.emit(this.doForm.value);
  }

}
