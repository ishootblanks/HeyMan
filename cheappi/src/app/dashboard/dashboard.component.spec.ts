import { DashboardComponent } from './dashboard.component';
import { ApiClientServiceService } from '../api-client-service.service';
import { of } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let service: ApiClientServiceService;

  beforeEach(() => { 
    service = new ApiClientServiceService(undefined);
    component = new DashboardComponent(service);
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('#getCoordinates should assign coordinates to #origin and #destination', () => {
    const data = {results: [{geometry: {location: {
      lat: 41.4039286,
      lng: 2.181874
    }}}]};

    service.getLocation = () => of(data); 
    
    component.onClickMe();

    expect(component.origin.lat).toBe(41.4039286);
    expect(component.origin.lng).toBe(2.181874);
    expect(component.destination.lat).toBe(41.4039286);
    expect(component.destination.lng).toBe(2.181874);
  })
});