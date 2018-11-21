import { TestBed } from '@angular/core/testing';

import { AuthUberServiceService } from './auth-uber-service.service';

describe('AuthUberServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUberServiceService = TestBed.get(AuthUberServiceService);
    expect(service).toBeTruthy();
  });
});
