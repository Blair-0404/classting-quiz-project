import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 15px;
  color: black;
  border-radius: 3px;
  padding: 5px 15px;
  border: 1px solid gray;
  background-color: lightgray;

  &:hover {
    color: gray;
    cursor: pointer;
    background-color: #c2c0c0;
    color: black;

  }

  &:disabled {
    color: gray;
    font-weight: 400;
    cursor: auto;

    &:hover {
      background-color: lightgray;
    }
  }
`;
export const Title = styled.span`
`;
