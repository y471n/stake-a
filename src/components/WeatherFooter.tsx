import React from "react";
import { StyledWeatherFooter } from "../styling/weatherFooter";
import { formatWeatherDate } from "../utils/date";

interface IWeatherFooterProps {
  weatherList: any;
}

const WeatherFooter = ({ weatherList }: IWeatherFooterProps) => {
  return (
    <div>
      <StyledWeatherFooter>
        {weatherList.map((weatherEntry: any, idx: number) => (
          <div key={idx}>
            <div>{formatWeatherDate(weatherEntry.dt_txt)}</div>
            <div>{weatherEntry.main.temp} C</div>
          </div>
        ))}
      </StyledWeatherFooter>
    </div>
  );
};

export default WeatherFooter;
