import { ApiClientServiceService } from './api-client-service.service';
import { HttpClient } from '@angular/common/http';


describe('ApiClientServiceService', () => {
  let httpClient: HttpClient;
  let service: ApiClientServiceService;

  beforeEach(() => {
    const httpClient = new HttpClient(undefined);
    service = new ApiClientServiceService(httpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


