import { TestBed } from '@angular/core/testing';

import { ObjettrouveserviceService } from './objettrouveservice.service';

describe('ObjettrouveserviceService', () => {
  let service: ObjettrouveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjettrouveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
