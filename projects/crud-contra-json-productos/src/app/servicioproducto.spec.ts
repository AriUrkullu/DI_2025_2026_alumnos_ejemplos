import { TestBed } from '@angular/core/testing';

import { Servicioproducto } from './servicioproducto';

describe('Servicioproducto', () => {
  let service: Servicioproducto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicioproducto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
