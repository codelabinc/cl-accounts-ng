import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAutocompleteChipComponent } from './account-autocomplete-chip.component';

describe('AccountAutocompleteChipComponent', () => {
  let component: AccountAutocompleteChipComponent;
  let fixture: ComponentFixture<AccountAutocompleteChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAutocompleteChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAutocompleteChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
