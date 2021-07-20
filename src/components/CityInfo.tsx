import React from "react";
import { Button, H3 } from "stake-assess-ds";
import { ICity } from "../interfaces";

interface ICityInfo {
  city: ICity;
}
const CityInfo = ({ city }: ICityInfo) => {
  const { name, country, population } = city;
  return (
    <div>
      <H3 align="center">{name}</H3>
      <span>{country}</span>
      <p>{population && <span>Population: {population}</span>}</p>
    </div>
  );
};

export default CityInfo;
