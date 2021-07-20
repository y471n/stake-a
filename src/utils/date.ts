import dayjs from "dayjs";

export const formatWeatherDate = (dateText: string): string => {
  console.log(dateText);
  return dayjs(dateText).format("MMM, D");
};
