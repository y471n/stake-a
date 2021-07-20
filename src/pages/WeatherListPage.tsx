import React from "react";
import Loader from "../components/Loader";
import WeatherListCard from "../components/WeatherListCard";
import useWeather from "../hooks/useWeather";
import { ICityWeather } from "../interfaces";
import { Button, TextInput, H2 } from "stake-assess-ds";
import { Spacer, StyledPage } from "./styled";

const WeatherPage = () => {
  const [weatherList, setWeatherList] = React.useState<ICityWeather[]>([]);
  const [city, setCity] = React.useState("");

  const { isLoading, isError, error, data, refetch, isSuccess } =
    useWeather(city);

  React.useEffect(() => {
    const filteredWeatherList = weatherList.filter(
      (weatherEntry) => weatherEntry.city.id !== data?.city.id
    );
    isSuccess && data && setWeatherList([data, ...filteredWeatherList]);
    setCity("");
  }, [isSuccess, data, setWeatherList, weatherList]);

  const handleClick = () => {
    refetch();
  };

  return (
    <StyledPage>
      <H2>Weather Demo</H2>
      <Spacer />
      <TextInput
        type="text"
        onChange={(e: any) => setCity(e.target.value)}
        value={city}
      />
      <Spacer />
      <Button type="secondary" onClick={handleClick}>
        Get Weather
      </Button>
      <Spacer padding="2rem" />
      {isLoading && <Loader />}
      {isError && error}
      {weatherList.map((weatherEntry) => (
        <React.Fragment key={weatherEntry.city.id}>
          <WeatherListCard weather={weatherEntry} />
          <Spacer padding="1rem" />
        </React.Fragment>
      ))}
    </StyledPage>
  );
};

export default WeatherPage;
