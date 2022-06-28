import React from "react";
import { Parameter } from "./index";
import Data from "../../../data/pokemon-data.json";
import { ConvertTypeEnglish } from "../../../util/Convert";

export default {
  title: "atoms/Parameter",
  component: Parameter,
};

export const Basic = () => {
  const pokemonNo = 20;

  return <Parameter types={Data[pokemonNo].types} Englishtypes={Englishtypes} />;
};
