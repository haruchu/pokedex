import React from "react";
import { Parameter } from "./index";
import Data from "../../../data/pokemon-data.json";

export default {
  title: "Parts/Parameter",
  component: Parameter,
};

export const Basic = () => {
  const pokemonNo = 160;
  return <Parameter status={Data[pokemonNo].stats} />;
};
