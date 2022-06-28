import { TYPE_COLOR } from "../styles/color";

export type EnglishType = keyof typeof TYPE_COLOR | "ERROR";

export type StatusType = {
  hp: number;
  attack: number;
  defence: number;
  spAttack: number;
  spDefence: number;
  speed: number;
};
