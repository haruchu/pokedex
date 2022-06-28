import styled from "styled-components";

export const Input = styled.input<{ isOpen: boolean }>`
  width: 200px;
  height: 40px;
  padding: 8px;
  font-size: 20px;
  border: 1px solid red;
  box-sizing: border-box;
  transition: 0.2s;
  position: fixed;
  top: 10px;
  right: 10px;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(-30%)` : "translateX(120%) scale(0)"};

  &:focus {
    outline: none;
    border: 2px solid red;
  }
`;

export const ShowButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 0, 0, 0.8);
  border: none;
  cursor: pointer;
  border-radius: 50%;
  position: fixed;
  top: 10px;
  right: 10px;
  box-shadow: 0 0 8px gray;
  transition: 0.2s;

  &:hover {
    box-shadow: none;
  }

  & svg {
    color: white;
    transform: scale(1.5);
  }
`;
