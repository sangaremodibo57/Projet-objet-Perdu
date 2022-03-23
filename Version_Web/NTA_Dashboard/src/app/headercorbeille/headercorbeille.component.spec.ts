import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercorbeilleComponent } from './headercorbeille.component';

describe('HeadercorbeilleComponent', () => {
  let component: HeadercorbeilleComponent;
  let fixture: ComponentFixture<HeadercorbeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercorbeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercorbeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
