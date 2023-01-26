import { TestBed } from '@angular/core/testing';

import { STonerService } from './s-toner.service';

describe('STonerService', () => {
  let service: STonerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STonerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
