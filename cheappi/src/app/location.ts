export class Location {
  latitude: number;
  longitude: number;
  streetNumber: string;
  route: string;
  locality: string;
  postalCode: string;
  country: string;

  static parse (data) {
    let location = Object.assign(new Location(), data);
    if (data.results.geometry) {
      location.latitude = data.results.geometry.location.lat;
      location.longitude = data.results.geometry.location.lng;
    }
    if (data.results.address_components) {
      location.streetNumber = data.results.address_components[0].short_name;
      location.route = data.results.address_components[1].short_name;
      location.locality = data.results.address_components[2].short_name;
      location.postalCode = data.results.address_components[6].short_name;
      location.country = data.results.address_components[5].short_name;
    }

  return location;
  }

}
