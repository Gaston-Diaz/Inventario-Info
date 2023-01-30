import { TestBed } from '@angular/core/testing';

import { SEpcServiceService } from './s-epc-service.service';

describe('SEpcServiceService', () => {
  let service: SEpcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEpcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
