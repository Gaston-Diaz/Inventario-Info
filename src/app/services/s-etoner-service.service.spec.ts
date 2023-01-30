import { TestBed } from '@angular/core/testing';

import { SEtonerServiceService } from './s-etoner-service.service';

describe('SEtonerServiceService', () => {
  let service: SEtonerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEtonerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
