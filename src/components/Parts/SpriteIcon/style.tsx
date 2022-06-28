import styled from "styled-components";
import { EnglishType } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";
import { phone } from "../../../valiables/BreakPoint";

export const IconWrapper = styled.a<{
  type: EnglishType;
}>`
  background-color: ${({ type }) =>`${TYPE_COLOR[type]};`};
  width: 100px;
  height: 100px;
  & img {
    width: 100%;
  }
  ${phone`
      width: 60px;
      height: 60px;
  `}
  margin: 10px;
  border-radius: 50%;
  display: block;
`;
