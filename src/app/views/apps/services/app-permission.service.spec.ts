import { TestBed } from '@angular/core/testing';

import { AppPermissionService } from './app-permission.service';

describe('AppPermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPermissionService = TestBed.get(AppPermissionService);
    expect(service).toBeTruthy();
  });
});
