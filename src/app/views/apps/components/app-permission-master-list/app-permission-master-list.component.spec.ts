import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPermissionMasterListComponent } from './app-permission-master-list.component';

describe('AppPermissionMasterListComponent', () => {
  let component: AppPermissionMasterListComponent;
  let fixture: ComponentFixture<AppPermissionMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPermissionMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPermissionMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
