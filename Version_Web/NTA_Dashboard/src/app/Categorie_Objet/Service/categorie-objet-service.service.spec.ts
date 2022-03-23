import { TestBed } from '@angular/core/testing';

import { CategorieObjetServiceService } from './categorie-objet-service.service';

describe('CategorieObjetServiceService', () => {
  let service: CategorieObjetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieObjetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
