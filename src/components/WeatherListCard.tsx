import React from "react";
import { Modal, WeatherCard } from "stake-assess-ds";
import useModal from "../hooks/useModal";
import { ICityWeather } from "../interfaces";
import { Spacer } from "../pages/styled";
import { StyledWeatherModal } from "../styling/weatherModal";
import { formatWeatherDate } from "../utils/date";
import { getWeatherForDays } from "../utils/weather";
import CityInfo from "./CityInfo";
import WeatherFooter from "./WeatherFooter";

interface IWeatherListCardProps {
  weather: ICityWeather;
}

const WeatherListCard = (props: IWeatherListCardProps) => {
  const { weather } = props;
  const weatherList = getWeatherForDays(weather.list, 3);
  const { isShowing, toggle } = useModal();

  return (
    <React.Fragment>
      <WeatherCard
        main={<CityInfo city={weather.city} />}
        footer={<WeatherFooter weatherList={weatherList} />}
        borderRadius="0"
        onClick={toggle}
      />
      <Modal isShowing={isShowing} hide={toggle} opacity={0.9}>
        <StyledWeatherModal>
          {getWeatherForDays(weather.list, 8).map(
            (weatherEntry: any, idx: number) => (
              <div key={idx}>
                <div>{formatWeatherDate(weatherEntry.dt_txt)}</div>
                <div>{weatherEntry.main.temp} C</div>
                <Spacer />
              </div>
            )
          )}
        </StyledWeatherModal>
      </Modal>
    </React.Fragment>
  );
};

export default WeatherListCard;
