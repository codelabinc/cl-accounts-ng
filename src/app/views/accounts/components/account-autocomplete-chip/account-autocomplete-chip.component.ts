import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { SelectUi } from '../../../../model/master-records';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, map, filter } from 'rxjs/operators';
import { Account } from '../../model/account';
import { Page } from 'app/model/page/page';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-autocomplete-chip',
  templateUrl: './account-autocomplete-chip.component.html',
  styleUrls: ['./account-autocomplete-chip.component.css']
})
export class AccountAutocompleteChipComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  accounts: SelectUi[] = [];

  filteredAccounts: Observable<Account[]>;
  doForm: FormGroup;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('termInput', { static: false }) termInput: ElementRef;

  @Output()
  valueChanged: EventEmitter<SelectUi[]> = new EventEmitter();

  constructor(private accountsService: AccountsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.doForm = this.fb.group({
      term: null
    });

    this.filteredAccounts = this.doForm.get('term').valueChanges
      .pipe(
        filter(it => !!it),
        filter(it => {
          return typeof (it) === 'string'
        }),
        switchMap(value => this.accountsService.search({ name: value }).pipe(
          map((data: Page<Account>) => data.content)
        ))
      );
  }


  remove(account, index): void {
    this.accounts.splice(index, 1);
    this.valueChanged.emit(this.accounts);
  }

  displayFn(account: Account) {
    if (account) { return account.name; }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const account: Account = event.option.value;
    if (this.accounts.findIndex(x => x.value === account.code) != -1) {
      this.snackBar.open(`${account.name} already added`, 'Dismiss');
      this.doForm.get('term').setValue(null);
      return;
    }
    this.accounts.push({ name: account.name, value: account.code });
    this.doForm.get('term').setValue(null);
    this.termInput.nativeElement.value = '';
    this.valueChanged.emit(this.accounts);
  }

  onValueChanged() {
    this.valueChanged.emit(this.accounts);
  }


}
