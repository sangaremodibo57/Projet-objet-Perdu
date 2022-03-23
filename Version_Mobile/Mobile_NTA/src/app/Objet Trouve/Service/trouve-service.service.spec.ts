import { TestBed } from '@angular/core/testing';

import { TrouveServiceService } from './trouve-service.service';

describe('TrouveServiceService', () => {
  let service: TrouveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrouveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
