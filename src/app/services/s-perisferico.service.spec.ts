import { TestBed } from '@angular/core/testing';

import { SPerisfericoService } from './s-perisferico.service';

describe('SPerisfericoService', () => {
  let service: SPerisfericoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPerisfericoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
