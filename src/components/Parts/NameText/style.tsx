import styled from "styled-components";
import { phone, tablet } from "../../../valiables/BreakPoint";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
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
  left: 20px;
`;

const Text = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
`;

export const Number = styled(Text)`
  font-size: 40px;
  font-weight: 600;

  ${tablet`
      font-size: 20px;
  `}
  ${phone`
      font-size: 10px;
  `}
`;

export const Name = styled(Text)`
  font-size: 60px;
  font-weight: 900;
  justify-content: flex-end;
  & img {
    width: 100px;
  }

  ${tablet`
      font-size: 30px;
      & img {
        width: 50px;
      }
  `}
  ${phone`
      font-size: 12px;
      & img {
        width: 30px;
      }
  `}
`;
