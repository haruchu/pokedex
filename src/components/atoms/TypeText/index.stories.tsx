import React from "react";
import { TypeText } from "./index";
import Data from "../../../data/pokemon-data.json";
import { ConvertTypeEnglish } from "../../../util/Convert";

export default {
  title: "atoms/TypeText",
  component: TypeText,
};

export const Basic = () => {
  const pokemonNo = 20;
  const Englishtypes = Data[pokemonNo].types.map((type) => {
    return ConvertTypeEnglish(type);
  });
  console.log(Englishtypes);

  return <TypeText types={Data[pokemonNo].types} EnglishTypes={Englishtypes} />;
};
