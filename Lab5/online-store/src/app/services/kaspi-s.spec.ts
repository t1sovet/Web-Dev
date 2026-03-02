import { TestBed } from '@angular/core/testing';

import { KaspiS } from './kaspi-s';

describe('KaspiS', () => {
  let service: KaspiS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaspiS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
