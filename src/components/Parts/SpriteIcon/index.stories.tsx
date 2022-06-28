import React, { useState } from "react";
import { SpriteIcon } from "./index";
import Data from "../../../data/pokemon-data.json";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../FirebaseConfig";
import { ConvertTypeEnglish } from "../../../util/Convert";

export default {
  title: "Parts/SpriteIcon",
  component: SpriteIcon,
};

export const Basic = () => {
  const [image, setImage] = useState("");
  const pokemonNo = 0;
  const fileName = ("000" + Data[pokemonNo].no).slice(-3) + "MS.png";
  const gsReference = ref(
    storage,
    "gs://pokedex-haru.appspot.com/sprites/" + fileName
  );
  getDownloadURL(gsReference)
    .then((url) => {
      setImage(url);
    })
    .catch((err) => console.log(err));

  return (
    <SpriteIcon
      SpriteImgPath={image}
      type={ConvertTypeEnglish(Data[pokemonNo].types[0])}
    />
  );
};
