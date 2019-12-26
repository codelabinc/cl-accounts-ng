import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWebHookFormComponent } from './app-web-hook-form.component';

describe('AppWebHookFormComponent', () => {
  let component: AppWebHookFormComponent;
  let fixture: ComponentFixture<AppWebHookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWebHookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWebHookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
