import React from "react";
import { TypeText } from "./index";
import Data from "../../../data/pokemonData.json";
import { ConvertTypeEnglish, ConvertTypeJapanese } from "../../../util/Convert";

export default {
  title: "Parts/TypeText",
  component: TypeText,
};

export const Basic = () => {
  const pokemonNo = 20;
  const EnglishTypes = Data[pokemonNo].type.map((type) => {
    return ConvertTypeEnglish(type);
  });

  const JapaneseTypes = Data[pokemonNo].type.map((type) => {
    return ConvertTypeJapanese(type);
  });

  return <TypeText types={JapaneseTypes} EnglishTypes={EnglishTypes} />;
};
