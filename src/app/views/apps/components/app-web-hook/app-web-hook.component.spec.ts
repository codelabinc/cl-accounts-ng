import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWebHookComponent } from './app-web-hook.component';

describe('AppWebHookComponent', () => {
  let component: AppWebHookComponent;
  let fixture: ComponentFixture<AppWebHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWebHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWebHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
