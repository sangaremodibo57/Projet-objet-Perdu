import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeobjetperduComponent } from './listeobjetperdu.component';

describe('ListeobjetperduComponent', () => {
  let component: ListeobjetperduComponent;
  let fixture: ComponentFixture<ListeobjetperduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeobjetperduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeobjetperduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
