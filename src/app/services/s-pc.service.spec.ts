import { TestBed } from '@angular/core/testing';

import { SPcService } from './s-pc.service';

describe('SPcService', () => {
  let service: SPcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
