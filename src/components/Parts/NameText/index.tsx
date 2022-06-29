import React from "react";
import { Name, Number, TextWrapper } from "./style";

type NameTextProps = {
  no: number;
  name: string;
  // firebase strageへの画像パスをPropsで渡す
  SpriteImgPath: string;
};

export const NameText = ({ no, name, SpriteImgPath }: NameTextProps) => {
  return (
    <TextWrapper>
      <Number>図鑑番号：{no}</Number>
      <Name>
        {name}
        <img src={SpriteImgPath} />
      </Name>
    </TextWrapper>
  );
};