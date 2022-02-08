import { TestBed } from '@angular/core/testing';

import { TabInfoService } from './tab-info.service';

describe('TabInfoService', () => {
  let service: TabInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
