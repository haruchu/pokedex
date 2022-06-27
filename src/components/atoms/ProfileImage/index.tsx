import React from "react";
import { ImageWrapper } from "./style";
import { Englishtype } from "../../../types/type";

type ProfileImageProps = {
  ImagePath: string;
  type: Englishtype;
};

export const ProfileImage = ({ ImagePath, type }: ProfileImageProps) => {
  return (
    <ImageWrapper type={type}>
      <img src={ImagePath} />
    </ImageWrapper>
  );
};
