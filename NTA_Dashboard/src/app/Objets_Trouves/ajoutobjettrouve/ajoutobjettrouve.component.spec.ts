import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutobjettrouveComponent } from './ajoutobjettrouve.component';

describe('AjoutobjettrouveComponent', () => {
  let component: AjoutobjettrouveComponent;
  let fixture: ComponentFixture<AjoutobjettrouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutobjettrouveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutobjettrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
