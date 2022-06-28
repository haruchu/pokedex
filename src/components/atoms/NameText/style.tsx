import styled from "styled-components";

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

const Text = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
`;

export const Number = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`;

export const Name = styled(Text)`
  font-size: 30px;
  font-weight: 900;
  justify-content: flex-end;
`;
