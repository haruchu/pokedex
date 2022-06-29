import React from "react";
import { ProfileWrapper } from "./style";
import Data from "../data/pokemonData.json";
import { ConvertTypeEnglish, ConvertTypeJapanese } from "../util/Convert";
import { useParams } from "react-router-dom";
import { NameText } from "../components/Parts/NameText";
import { ProfileImage } from "../components/Parts/ProfileImage";
import { Parameter } from "../components/Parts/Parameter";
import { TypeText } from "../components/Parts/TypeText";

const fetchImagePath = (no: number) => {
  const pokemonNo = no;
  const fileName = ("000" + pokemonNo).slice(-3) + ".png";
  const bucketName = "pokedex-haru.appspot.com";
  const filePath = `images/${fileName}`;
  const spritePath = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
    filePath
  )}?alt=media`;
  return spritePath;
};

const fetchSpritePath = (no: number) => {
  const pokemonNo = no;
  const fileName = ("000" + pokemonNo).slice(-3) + "MS.png";
  const bucketName = "pokedex-haru.appspot.com";
  const filePath = `sprites/${fileName}`;
  const spritePath = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
    filePath
  )}?alt=media`;
  return spritePath;
};

export const ProfilePage = () => {
  const { id } = useParams<string>();
  const data = Data[Number(id) - 1];

  const EnglishTypes = data.type.map((type) => {
    return ConvertTypeEnglish(type);
  });
  const JapaneseTypes = data.type.map((type) => {
    return ConvertTypeJapanese(type);
  });

  return (
    <ProfileWrapper>
      <NameText
        no={data.id}
        name={data.name.japanese}
        SpriteImgPath={fetchSpritePath(Number(id))}
      />
      <TypeText types={JapaneseTypes} EnglishTypes={EnglishTypes} />
      <ProfileImage
        ImagePath={fetchImagePath(Number(id))}
        type={ConvertTypeEnglish(data.type[0])}
      />
      <Parameter status={data.base} />
    </ProfileWrapper>
  );
};
