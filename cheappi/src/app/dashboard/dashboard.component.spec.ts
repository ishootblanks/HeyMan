import { DashboardComponent } from './dashboard.component';
import { ApiClientServiceService } from '../api-client-service.service';
import { of } from 'rxjs';


fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let service: ApiClientServiceService;

  beforeEach(() => { 
    const httpClient: any = {};
    const data = {results: [{geometry: {location: {
      lat: 41.4,
      lng: 2.1
    }}}]};
    httpClient.get = () => of(data);
    service = new ApiClientServiceService(httpClient);
    component = new DashboardComponent(service);
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('#getCoordinates should assign coordinates to #origin and #destination', () => {
    

    // service.getLocation = () => of(data); 
    
    component.onClickMe();

    expect(component.origin.lat).toBe(41.4);
    expect(component.origin.lng).toBe(2.1);
    expect(component.destination.lat).toBe(41.4);
    expect(component.destination.lng).toBe(2.1);
  })

  it('should get location', () => {
    const spy = spyOn(service, 'getLocation');
    // component.originInput = 'carrer de los castillejos 210, barcelona, spain';
    // component.destinationInput = 'Carrer de la Marina, 15, Barcelona, Spain';
    
    component.onClickMe();


    expect(spy).toHaveBeenCalled();
  })
  
  it('#onClickMe should call #getCoordinates twice', () => {
   
  })
});