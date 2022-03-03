import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeobjettrouveComponent } from './listeobjettrouve.component';

describe('ListeobjettrouveComponent', () => {
  let component: ListeobjettrouveComponent;
  let fixture: ComponentFixture<ListeobjettrouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeobjettrouveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeobjettrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
