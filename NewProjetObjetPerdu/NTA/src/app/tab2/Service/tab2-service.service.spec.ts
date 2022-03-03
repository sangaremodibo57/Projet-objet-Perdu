import { TestBed } from '@angular/core/testing';

import { Tab2ServiceService } from './tab2-service.service';

describe('Tab2ServiceService', () => {
  let service: Tab2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
