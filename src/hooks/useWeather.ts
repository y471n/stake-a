import axios from "axios";
import { useQuery } from "react-query";
import { ICityWeather } from "../interfaces";

const APP_ID = "743d7868815b64b5047e7578d611eefc";

const fetchWeather = (city: string): Promise<ICityWeather> =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_ID}&units=metric`
    )
    .then((res) => res.data);

export default function useWeather(city: string) {
  return useQuery(["weather", city], () => fetchWeather(city), {
    enabled: false,
  });
}
