import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abilita } from './abilita';

describe('Abilita', () => {
  let component: Abilita;
  let fixture: ComponentFixture<Abilita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abilita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abilita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
