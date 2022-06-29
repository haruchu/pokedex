import styled from "styled-components";
import { phone, tablet } from "valiables/BreakPoint";

export const StatusWrapper = styled.div`
  width: 600px;
  position: absolute;
  bottom: 30px;
  right: 30px;

  ${tablet`
    width: 400px;
  `}
  ${phone`
    width: 250px;
  `}
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusName = styled.span`
  width: 20%;
  font-size: 16px;
  ${phone`
    font-size: 12px;
  `}
`;

export const StatusBar = styled.span<{ value: number }>`
  display: block;
  width: 80%;
  height: 8px;
  margin-right: 10px;
  background-color: gray;
  background: ${({ value }) =>
    `linear-gradient(90deg,#88c8b0 0%,#88c8b0 ${value}%,gray ${value}%,gray 100%);`};
`;
