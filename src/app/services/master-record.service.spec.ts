import { TestBed } from '@angular/core/testing';

import { MasterRecordService } from './master-record.service';

describe('MasterRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterRecordService = TestBed.get(MasterRecordService);
    expect(service).toBeTruthy();
  });
});
