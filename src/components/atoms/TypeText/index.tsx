import React from "react";
import { EnglishType } from "../../../types/type";
import { MainTypeText, SubTypeText, TextWrapper } from "./style";

type TypeTextProps = {
  types: string[];
  EnglishTypes: EnglishType[];
};

export const TypeText = ({ types, EnglishTypes }: TypeTextProps) => {
  return (
    <TextWrapper>
      {types.map((type, index) =>
        index == 0 ? (
          <MainTypeText textColor={EnglishTypes[index]}>{type}</MainTypeText>
        ) : (
          <SubTypeText textColor={EnglishTypes[index]}>{type}</SubTypeText>
        )
      )}
    </TextWrapper>
  );
};
