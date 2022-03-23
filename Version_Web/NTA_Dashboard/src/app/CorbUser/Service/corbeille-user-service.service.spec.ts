import { TestBed } from '@angular/core/testing';

import { CorbeilleUserServiceService } from './corbeille-user-service.service';

describe('CorbeilleUserServiceService', () => {
  let service: CorbeilleUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorbeilleUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
