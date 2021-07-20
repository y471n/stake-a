import dayjs from "dayjs";

export const getWeatherForDays = (weatherList: any[], days: number) => {
  let previousDate: number | undefined = undefined;
  return weatherList.filter((weatherEntry: any) => {
    const currentDate = dayjs(weatherEntry.dt_txt).date();
    const addDate = days > 0 && currentDate !== previousDate;
    if (addDate) {
      days -= 1;
    }
    previousDate = currentDate;
    return addDate;
  });
};
