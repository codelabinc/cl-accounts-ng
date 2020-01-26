import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { SelectUi } from 'app/model/master-records';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { App } from '../../model/app-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatAutocomplete, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { AppsService } from '../../services/apps.service';
import { switchMap, map, filter } from 'rxjs/operators';
import { Page } from 'app/model/page/page';

@Component({
  selector: 'app-app-autocomplete-chip',
  templateUrl: './app-autocomplete-chip.component.html',
  styleUrls: ['./app-autocomplete-chip.component.css']
})
export class AppAutocompleteChipComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  apps: SelectUi[] = [];

  filteredApps: Observable<App[]>;
  doForm: FormGroup;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  @ViewChild('termInput', {static: false}) termInput: ElementRef;

  @Output()
  valueChanged: EventEmitter<SelectUi[]> = new EventEmitter();
  constructor(private appService: AppsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.doForm = this.fb.group({
      term: null
    });

    this.filteredApps = this.doForm.get('term').valueChanges
    .pipe(
      filter(it => !!it),
      filter(it => {
        return typeof(it) === 'string' 
      }),
      switchMap(value => this.appService.search({'app.name': value}).pipe(
        map((data: Page<App>) => data.content)
      ))
    );
  }

  displayFn(app: App) {
    if (app) { return app.name; }
  }

  remove(app, index): void {
    this.apps.splice(index, 1);
    this.valueChanged.emit(this.apps);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const app: App = event.option.value;
    if (this.apps.findIndex(x => x.value === app.code) != -1) {
      this.snackBar.open(`${app.name} already added`, 'Dismiss');
      this.doForm.get('term').setValue(null);
      return;
    }
    this.apps.push({name: app.name, value: app.code});
    this.doForm.get('term').setValue(null);
    this.termInput.nativeElement.value = '';
    this.valueChanged.emit(this.apps);
  }

  onValueChanged() {
    this.valueChanged.emit(this.apps);
  }


}
