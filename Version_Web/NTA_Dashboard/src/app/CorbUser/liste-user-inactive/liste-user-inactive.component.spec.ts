import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUserInactiveComponent } from './liste-user-inactive.component';

describe('ListeUserInactiveComponent', () => {
  let component: ListeUserInactiveComponent;
  let fixture: ComponentFixture<ListeUserInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUserInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUserInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
