import airportList from './airport-list.json';

type Airport = {
  airportIata: string;
  country: Country;
  time: Time;
  location: Location;
};
type Country = {
  code: string;
  name: string;
};
type Time = {
  timezone: string;
  gmt: number;
  dst: number;
};
type Location = {
  latitude: string;
  longitude: string;
};

export class AirportTzTs {
  private readonly _airportIata: string;
  private readonly _airportList: Airport[] = airportList;

  constructor(airportIata: string) {
    this._airportIata = airportIata;
  }

  get airport(): Airport | undefined {
    return this._airportList.find(
      (airport: Airport) => airport.airportIata === this._airportIata
    );
  }

  filterAirportBy(countryCode: string): Airport[] {
    return this._airportList.filter(
      (airport: Airport) => airport.country.code === countryCode
    );
  }
}
