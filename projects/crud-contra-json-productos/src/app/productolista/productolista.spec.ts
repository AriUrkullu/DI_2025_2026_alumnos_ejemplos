import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productolista } from './productolista';

describe('Productolista', () => {
  let component: Productolista;
  let fixture: ComponentFixture<Productolista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productolista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productolista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
