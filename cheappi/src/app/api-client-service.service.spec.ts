import { TestBed } from '@angular/core/testing';

import { ApiClientServiceService } from './api-client-service.service';

describe('ApiClientServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClientServiceService = TestBed.get(ApiClientServiceService);
    expect(service).toBeTruthy();
  });
});
