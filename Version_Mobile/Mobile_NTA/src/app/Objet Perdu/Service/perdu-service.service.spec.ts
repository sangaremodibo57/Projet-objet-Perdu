import { TestBed } from '@angular/core/testing';

import { PerduServiceService } from './perdu-service.service';

describe('PerduServiceService', () => {
  let service: PerduServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerduServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
