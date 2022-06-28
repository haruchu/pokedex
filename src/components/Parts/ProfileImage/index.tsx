import React from "react";
import { ImageWrapper } from "./style";
import { EnglishType } from "../../../types/type";

type ProfileImageProps = {
  ImagePath: string;
  type: EnglishType;
};

export const ProfileImage = ({ ImagePath, type }: ProfileImageProps) => {
  return (
    <ImageWrapper type={type}>
      <img src={ImagePath} />
    </ImageWrapper>
  );
};
