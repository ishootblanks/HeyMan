import { TestBed } from '@angular/core/testing';

import { RatesServiceService } from './rates-service.service';

describe('RatesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatesServiceService = TestBed.get(RatesServiceService);
    expect(service).toBeTruthy();
  });
});
