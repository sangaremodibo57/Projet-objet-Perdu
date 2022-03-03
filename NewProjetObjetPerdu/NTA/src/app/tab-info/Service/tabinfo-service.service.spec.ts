import { TestBed } from '@angular/core/testing';

import { TabinfoServiceService } from './tabinfo-service.service';

describe('TabinfoServiceService', () => {
  let service: TabinfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabinfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
