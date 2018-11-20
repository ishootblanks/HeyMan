import { ApiClientServiceService } from './api-client-service.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const data = {
  results: [{
    geometry: {
      location: {
        lat: 1,
        lng: 2,
      }
    }
  }]
};
const httpClient: any = {};
httpClient.get = () => of(data);


describe('ApiClientServiceService', () => {
  let service: ApiClientServiceService;

  beforeEach(() => {
    service = new ApiClientServiceService(httpClient as HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getLocation should get lat and lng', () => {
    service.getLocation('barcelona').subscribe((res) => {
      expect(res.results[0].geometry.location.lat).toEqual(1);
      expect(res.results[0].geometry.location.lng).toEqual(2);
    });
  });
});
      
     


