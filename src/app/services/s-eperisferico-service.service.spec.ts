import { TestBed } from '@angular/core/testing';

import { SEperisfericoServiceService } from './s-eperisferico-service.service';

describe('SEperisfericoServiceService', () => {
  let service: SEperisfericoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEperisfericoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
