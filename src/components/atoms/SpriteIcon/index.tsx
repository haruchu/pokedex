import React from "react";

type SpriteIconProps = {
  SpriteImgPath: string;
};

export const SpriteIcon = ({ SpriteImgPath }: SpriteIconProps) => {
  return (
    <>
      <img src={SpriteImgPath} />
    </>
  );
};
