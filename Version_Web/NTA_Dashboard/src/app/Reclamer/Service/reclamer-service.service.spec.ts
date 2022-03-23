import { TestBed } from '@angular/core/testing';

import { ReclamerServiceService } from './reclamer-service.service';

describe('ReclamerServiceService', () => {
  let service: ReclamerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
