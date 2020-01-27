import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAutocompleteChipComponent } from './app-autocomplete-chip.component';

describe('AppAutocompleteChipComponent', () => {
  let component: AppAutocompleteChipComponent;
  let fixture: ComponentFixture<AppAutocompleteChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAutocompleteChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAutocompleteChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
