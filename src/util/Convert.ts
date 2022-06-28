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

export const ConvertStatusJapanese = (status: string) => {
  let JapaneseStatus;
  switch (status) {
    case "hp":
      JapaneseStatus = "HP";
      break;
    case "attack":
      JapaneseStatus = "攻撃";
      break;
    case "defence":
      JapaneseStatus = "防御";
      break;
    case "spAttack":
      JapaneseStatus = "特攻";
      break;
    case "spDefence":
      JapaneseStatus = "特防";
      break;
    case "speed":
      JapaneseStatus = "素早さ";
      break;
    default:
      JapaneseStatus = "エラー";
      break;
  }
  return JapaneseStatus;
};
