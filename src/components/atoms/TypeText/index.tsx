import React from "react";
import { Englishtype } from "../../../types/type";
import { MainTypeText, SubTypeText, TextWrapper } from "./style";

type TypeTextProps = {
  types: string[];
  Englishtypes: Englishtype[];
};

export const TypeText = ({ types, Englishtypes }: TypeTextProps) => {
  return (
    <TextWrapper>
      {types.map((type, index) =>
        index == 0 ? (
          <MainTypeText textColor={Englishtypes[index]}>{type}</MainTypeText>
        ) : (
          <SubTypeText textColor={Englishtypes[index]}>{type}</SubTypeText>
        )
      )}
    </TextWrapper>
  );
};
