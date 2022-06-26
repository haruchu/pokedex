import { TYPE_COLOR } from "styles/color";

export const ConvertTypeEnglish = (type: string) => {
  let englishType: keyof typeof TYPE_COLOR | "ERROR";
  switch (type) {
    case "ノーマル":
      englishType = "NORMAL";
      break;
    case "ほのお":
      englishType = "FIRE";
      break;
    case "みず":
      englishType = "WATER";
      break;
    case "でんき":
      englishType = "ELECTRIC";
      break;
    case "くさ":
      englishType = "GRASS";
      break;
    case "こおり":
      englishType = "ICE";
      break;
    case "かくとう":
      englishType = "FIGHTING";
      break;
    case "どく":
      englishType = "POISON";
      break;
    case "じめん":
      englishType = "GROUND";
      break;
    case "ひこう":
      englishType = "FLYING";
      break;
    case "エスパー":
      englishType = "PSYCHIC";
      break;
    case "むし":
      englishType = "BUG";
      break;
    case "いわ":
      englishType = "ROCK";
      break;
    case "ゴースト":
      englishType = "GHOST";
      break;
    case "ドラゴン":
      englishType = "DRAGON";
      break;
    case "あく":
      englishType = "DARK";
      break;
    case "はがね":
      englishType = "STEEL";
      break;
    case "フェアリー":
      englishType = "FAIRY";
      break;
    default:
      englishType = "ERROR";
      break;
  }
  return englishType;
};
