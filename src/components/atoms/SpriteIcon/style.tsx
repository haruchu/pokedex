import styled from "styled-components";
import { Englishtype } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";

export const IconWrapper = styled.a<{
  type: Englishtype;
}>`
  background-color: ${({ type }) =>
    type !== "ERROR" ? `${TYPE_COLOR[type]};` : `transparent;`};
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 50%;
  display: block;
`;
