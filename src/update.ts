import csvParse from 'csv-parse';
import fs from 'fs';
import fetch from 'node-fetch';

const fetchAndWrite = async (): Promise<void> => {
  try {
    const res = await fetch(
      'https://github.com/opentraveldata/opentraveldata/raw/master/opentraveldata/optd_por_public.csv'
    );
    const text = await res.text();
    csvParse(
      text,
      { delimiter: '^', relax: true, columns: true },
      (_, airportList: any[]) => {
        fs.writeFile(
          './src/airport-list.json',
          JSON.stringify(
            airportList.map((airport) => ({
              airportIata: airport.iata_code,
              country: {
                code: airport.country_code,
                name: airport.country_name,
              },
              time: {
                timezone: airport.timezone,
                gmt: parseInt(airport.gmt_offset),
                dst: parseInt(airport.dst_offset),
              },
              location: {
                latitude: airport.latitude,
                longitude: airport.longitude,
              },
            }))
          ),
          (err) => (err ? console.error(err) : console.log('done.'))
        );
      }
    );
  } catch (e) {
    console.error(e);
  }
};
fetchAndWrite();
