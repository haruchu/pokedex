import styled from "styled-components";
import { Englishtype } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";
import { phone, tablet } from "../../../valiables/BreakPoint";

export const ImageWrapper = styled.div<{ type: Englishtype }>`
  background-color: ${({ type }) =>
    type !== "ERROR" ? `${TYPE_COLOR[type]};` : `transparent;`};
  width: 400px;
  height: 400px;
  padding: 40px;
  border-radius: 50%;

  ${tablet`
      width: 300px;
      height: 300px;
  `}

  ${phone`
      width: 100px;
      height: 100px;
      padding: 20px;
  `}

  & img {
    width: 100%;
  }
`;
