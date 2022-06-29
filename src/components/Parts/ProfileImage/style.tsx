import styled from "styled-components";
import { EnglishType } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";
import { phone, tablet } from "../../../valiables/BreakPoint";

export const ImageWrapper = styled.div<{ type: EnglishType }>`
  background-color: ${({ type }) => `${TYPE_COLOR[type]};`};
  width: 400px;
  height: 400px;
  padding: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  ${tablet`
      width: 450px;
      height: 450px;
  `}

  ${phone`
      width: 220px;
      height: 220px;
      padding: 20px;
  `}

  & img {
    width: 100%;
  }
`;
