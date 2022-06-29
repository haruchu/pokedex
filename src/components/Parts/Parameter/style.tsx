import styled from "styled-components";

export const StatusWrapper = styled.div`
  width: 400px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusName = styled.span`
  width: 15%;
  font-size: 16px;
`;

export const StatusBar = styled.span<{ value: number }>`
  display: block;
  width: 80%;
  height: 4px;
  margin-right: 10px;
  background-color: gray;
  background: ${({ value }) =>
    `linear-gradient(90deg,#88c8b0 0%,#88c8b0 ${value}%,gray ${value}%,gray 100%);`};
`;
