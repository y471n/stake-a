export interface ICoordinates {
  lat: number;
  long: number;
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ICityWeather {
  cod: string;
  message: number;
  cnt: number;
  list: any[];
  city: ICity;
}
