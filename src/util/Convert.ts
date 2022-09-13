import { TYPE_COLOR } from "styles/color";

export const ConvertTypeEnglish = (type: string) => {
  let englishType: keyof typeof TYPE_COLOR;
  switch (type) {
    case "Normal":
      englishType = "NORMAL";
      break;
    case "Fire":
      englishType = "FIRE";
      break;
    case "Water":
      englishType = "WATER";
      break;
    case "Electric":
      englishType = "ELECTRIC";
      break;
    case "Grass":
      englishType = "GRASS";
      break;
    case "Ice":
      englishType = "ICE";
      break;
    case "Fighting":
      englishType = "FIGHTING";
      break;
    case "Poison":
      englishType = "POISON";
      break;
    case "Ground":
      englishType = "GROUND";
      break;
    case "Flying":
      englishType = "FLYING";
      break;
    case "Psychic":
      englishType = "PSYCHIC";
      break;
    case "Bug":
      englishType = "BUG";
      break;
    case "Rock":
      englishType = "ROCK";
      break;
    case "Ghost":
      englishType = "GHOST";
      break;
    case "Dragon":
      englishType = "DRAGON";
      break;
    case "Dark":
      englishType = "DARK";
      break;
    case "Steel":
      englishType = "STEEL";
      break;
    case "Fairy":
      englishType = "FAIRY";
      break;
  }
  return englishType;
};

export const ConvertTypeJapanese = (type: string) => {
  let japaneseType: string;
  switch (type) {
    case "Normal":
      japaneseType = "ノーマル";
      break;
    case "Fire":
      japaneseType = "ほのお";
      break;
    case "Water":
      japaneseType = "みず";
      break;
    case "Electric":
      japaneseType = "でんき";
      break;
    case "Grass":
      japaneseType = "くさ";
      break;
    case "Ice":
      japaneseType = "こおり";
      break;
    case "Fighting":
      japaneseType = "かくとう";
      break;
    case "Poison":
      japaneseType = "どく";
      break;
    case "Ground":
      japaneseType = "じめん";
      break;
    case "Flying":
      japaneseType = "ひこう";
      break;
    case "Psychic":
      japaneseType = "エスパー";
      break;
    case "Bug":
      japaneseType = "むし";
      break;
    case "Rock":
      japaneseType = "いわ";
      break;
    case "Ghost":
      japaneseType = "ゴースト";
      break;
    case "Dragon":
      japaneseType = "ドラゴン";
      break;
    case "Dark":
      japaneseType = "あく";
      break;
    case "Steel":
      japaneseType = "はがね";
      break;
    case "Fairy":
      japaneseType = "フェアリー";
      break;
  }
  return japaneseType;
};

export const ConvertStatusJapanese = (status: string) => {
  let JapaneseStatus;
  switch (status) {
    case "HP":
      JapaneseStatus = "HP";
      break;
    case "Attack":
      JapaneseStatus = "攻撃";
      break;
    case "Defense":
      JapaneseStatus = "防御";
      break;
    case "Sp. Attack":
      JapaneseStatus = "特攻";
      break;
    case "Sp. Defense":
      JapaneseStatus = "特防";
      break;
    case "Speed":
      JapaneseStatus = "素早さ";
      break;
    default:
      JapaneseStatus = "エラー";
      break;
  }
  return JapaneseStatus;
};
