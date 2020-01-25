import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoleFormComponent } from './app-role-form.component';

describe('AppRoleFormComponent', () => {
  let component: AppRoleFormComponent;
  let fixture: ComponentFixture<AppRoleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRoleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
