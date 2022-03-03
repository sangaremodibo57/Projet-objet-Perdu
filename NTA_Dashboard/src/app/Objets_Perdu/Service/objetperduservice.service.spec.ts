import { TestBed } from '@angular/core/testing';

import { ObjetperduserviceService } from './objetperduservice.service';

describe('ObjetperduserviceService', () => {
  let service: ObjetperduserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetperduserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
