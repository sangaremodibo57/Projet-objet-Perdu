import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutobjetperduComponent } from './ajoutobjetperdu.component';

describe('AjoutobjetperduComponent', () => {
  let component: AjoutobjetperduComponent;
  let fixture: ComponentFixture<AjoutobjetperduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutobjetperduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutobjetperduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
