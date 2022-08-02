import { TestBed } from '@angular/core/testing';

import { BitcoinApiService } from './bitcoin-api.service';

describe('BitcoinApiService', () => {
  let service: BitcoinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
