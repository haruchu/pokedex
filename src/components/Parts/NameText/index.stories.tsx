import React, { useState } from "react";
import { NameText } from "./index";
import Data from "../../../data/pokemonData.json";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../FirebaseConfig";

export default {
  title: "Parts/NameText",
  component: NameText,
};

export const Basic = () => {
  const [image, setImage] = useState("");
  const pokemonNo = 20;
  const fileName = ("000" + Data[pokemonNo].id).slice(-3) + "MS.png";
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
    <NameText
      no={Data[pokemonNo].id}
      name={Data[pokemonNo].name.japanese}
      SpriteImgPath={image}
    />
  );
};