import { TestBed } from '@angular/core/testing';

import { ApiClientServiceService } from './api-client-service.service';
import { HttpClient } from '@angular/common/http';

describe('ApiClientServiceService', () => {
  let comp: ApiClientServiceService
  beforeEach(() => {
    comp = new ApiClientServiceService(new HttpClient())
  });

  it('should be created', () => {
    const service: ApiClientServiceService = comp;
    expect(true).toBeTruthy();
  });
});
