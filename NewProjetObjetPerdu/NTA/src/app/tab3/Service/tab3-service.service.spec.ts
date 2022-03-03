import { TestBed } from '@angular/core/testing';

import { Tab3ServiceService } from './tab3-service.service';

describe('Tab3ServiceService', () => {
  let service: Tab3ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab3ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
