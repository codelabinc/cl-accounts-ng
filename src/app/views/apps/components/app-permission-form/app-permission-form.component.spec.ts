import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPermissionFormComponent } from './app-permission-form.component';

describe('AppPermissionFormComponent', () => {
  let component: AppPermissionFormComponent;
  let fixture: ComponentFixture<AppPermissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPermissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
