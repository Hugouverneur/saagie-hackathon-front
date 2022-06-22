import { TestBed } from '@angular/core/testing';

import { SaagieApiService } from './saagie-api.service';

describe('SaagieApiService', () => {
  let service: SaagieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaagieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
