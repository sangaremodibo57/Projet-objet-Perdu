import { TestBed } from '@angular/core/testing';

import { CorbeilleAdminServiceService } from './corbeille-admin-service.service';

describe('CorbeilleAdminServiceService', () => {
  let service: CorbeilleAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorbeilleAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
