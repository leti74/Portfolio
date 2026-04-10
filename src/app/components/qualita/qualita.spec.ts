import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qualita } from './qualita';

describe('Qualita', () => {
  let component: Qualita;
  let fixture: ComponentFixture<Qualita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qualita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qualita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
