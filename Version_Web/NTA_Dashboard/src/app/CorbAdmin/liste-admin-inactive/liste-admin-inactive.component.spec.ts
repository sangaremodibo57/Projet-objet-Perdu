import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdminInactiveComponent } from './liste-admin-inactive.component';

describe('ListeAdminInactiveComponent', () => {
  let component: ListeAdminInactiveComponent;
  let fixture: ComponentFixture<ListeAdminInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdminInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdminInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
