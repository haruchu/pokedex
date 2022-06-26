import React from "react";
import { IconWrapper } from "./style";
import { TYPE_COLOR } from "../../../styles/color";

type SpriteIconProps = {
  // firebase strageへの画像パスをPropsで渡す
  SpriteImgPath: string;
  // 英語変換されたタイプ
  type: keyof typeof TYPE_COLOR | "ERROR";
};

export const SpriteIcon = ({ SpriteImgPath, type }: SpriteIconProps) => {
  return (
    <IconWrapper type={type} href="#">
      <img src={SpriteImgPath} />
    </IconWrapper>
  );
};
