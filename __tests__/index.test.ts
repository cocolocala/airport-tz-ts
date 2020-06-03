import { AirportTzTs } from '../src';

describe('AirportTzTs', () => {
  it('create instance', () => {
    expect(new AirportTzTs('NRT')).toBeDefined();
  });

  it('getter airport is return airport', () => {
    const expected = {
      airportIata: 'NRT',
      country: {
        code: 'JP',
        name: 'Japan',
      },
      time: {
        timezone: 'Asia/Tokyo',
        gmt: 9,
      },
      location: {
        latitude: '35.76472',
        longitude: '140.38639',
      },
    };
    expect(new AirportTzTs('NRT').airport).toEqual(expected);
  });
});
