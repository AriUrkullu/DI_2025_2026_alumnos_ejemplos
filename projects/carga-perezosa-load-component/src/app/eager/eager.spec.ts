import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eager } from './eager';

describe('Eager', () => {
  let component: Eager;
  let fixture: ComponentFixture<Eager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
