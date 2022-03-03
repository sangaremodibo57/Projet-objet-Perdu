import { TestBed } from '@angular/core/testing';

import { ForgotServiceService } from './forgot-service.service';

describe('ForgotServiceService', () => {
  let service: ForgotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
