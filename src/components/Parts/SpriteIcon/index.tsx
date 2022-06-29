import React from "react";
import { IconWrapper } from "./style";
import { EnglishType } from "../../../types/type";

type SpriteIconProps = {
  // firebase strageへの画像パスをPropsで渡す
  SpriteImgPath: string;
  // 英語変換されたタイプ
  type: EnglishType;
  ProfilePath: string;
};

export const SpriteIcon = ({
  SpriteImgPath,
  type,
  ProfilePath,
}: SpriteIconProps) => {
  return (
    <IconWrapper type={type} href={ProfilePath}>
      <img src={SpriteImgPath} />
    </IconWrapper>
  );
};
