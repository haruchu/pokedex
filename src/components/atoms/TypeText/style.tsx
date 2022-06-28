import styled from "styled-components";
import { Englishtype } from "../../../types/type";
import { TYPE_COLOR } from "../../../styles/color";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  background-color: white;
`;

const Text = styled.span<{ textColor: Englishtype }>`
  color: ${({ textColor }) =>
    textColor !== "ERROR" ? `${TYPE_COLOR[textColor]};` : `transparent;`};
  text-align: center;
`;

export const MainTypeText = styled(Text)`
  font-size: 30px;
  font-weight: 900;
`;

export const SubTypeText = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  margin-left: 16px;
`;
