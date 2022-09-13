import React, { useState } from "react";
import { ProfileImage } from "./index";
import Data from "../../../data/pokemonData.json";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../FirebaseConfig";
import { ConvertTypeEnglish } from "../../../util/Convert";

export default {
  title: "Parts/ProfileImage",
  component: ProfileImage,
};

export const Basic = () => {
  const [image, setImage] = useState("");
  const pokemonNo = 0;
  const fileName = ("000" + Data[pokemonNo].id).slice(-3) + ".png";
  const gsReference = ref(
    storage,
    "gs://pokedex-haru.appspot.com/images/" + fileName
  );
  getDownloadURL(gsReference)
    .then((url) => {
      setImage(url);
    })
    .catch((err) => console.log(err));

  return (
    <ProfileImage
      ImagePath={image}
      type={ConvertTypeEnglish(Data[pokemonNo].type[0])}
    />
  );
};
