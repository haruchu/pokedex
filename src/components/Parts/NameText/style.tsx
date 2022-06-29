import styled from "styled-components";
import { phone } from "../../../valiables/BreakPoint";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 200px;
  padding: 20px;
  ${phone`
      width: 100px;
      padding: 10px;
  `}
  border: 2px solid black;
  background-color: white;
`;

const Text = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
`;

export const Number = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  ${phone`
      font-size: 10px;
  `}
`;

export const Name = styled(Text)`
  font-size: 30px;
  font-weight: 900;
  justify-content: flex-end;
  ${phone`
      font-size: 16px;
  `}
`;