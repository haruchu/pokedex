import React from "react";
import { IconWrapper } from "./style";
import { EnglishType } from "../../../types/type";

type SpriteIconProps = {
  // firebase strageへの画像パスをPropsで渡す
  SpriteImgPath: string;
  // 英語変換されたタイプ
  type: EnglishType;
};

export const SpriteIcon = ({ SpriteImgPath, type }: SpriteIconProps) => {
  return (
    <IconWrapper type={type} href="#">
      <img src={SpriteImgPath} />
    </IconWrapper>
  );
};
