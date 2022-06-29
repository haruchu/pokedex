import styled from "styled-components";
import { EnglishType } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";
import { phone, tablet } from "../../../valiables/BreakPoint";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 300px;
  padding: 20px;
  ${tablet`
      width: 200px;
      padding: 10px;
  `}
  ${phone`
      width: 100px;
  `}
  border: 2px solid black;
  background-color: white;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Text = styled.span<{ textColor: EnglishType }>`
  color: ${({ textColor }) => `${TYPE_COLOR[textColor]};`};
  text-align: center;
`;

export const MainTypeText = styled(Text)`
  font-size: 50px;
  font-weight: 900;
  ${tablet`
      font-size: 28px;
  `}
  ${phone`
      font-size: 16px;
  `}
`;

export const SubTypeText = styled(Text)`
  font-size: 40px;
  font-weight: 600;
  margin-left: 60px;
  ${tablet`
      font-size: 20px;
  `}
  ${phone`
      font-size: 14px;
  `}
`;
