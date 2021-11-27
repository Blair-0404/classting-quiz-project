import styled from 'styled-components';

export const QuizContainer = styled.div`
`;

export const QuizItemContainer = styled.div`
`;
export const QuizNumber = styled.div`
  color: blue;
  margin-bottom: 5px;
  font-weight: 600;
  margin-right: 10px;
`;
export const QuestionTitle = styled.span`
  display: inline-block;
  color: blue;
  margin-bottom: 10px;
  font-weight: 600;


`;
export const ExampleWrapper = styled.div`
  min-height: 100px;
  margin-bottom: 10px;

`;
export const Example = styled.button<{ isSelect:boolean }>`
  display: block;
  border: none;
  margin-bottom: 5px;

  &:hover {
    color: black;
    font-weight: 600;
    cursor: pointer;
  }

  &:disabled {
    color: gray;
    cursor: auto;
     ${({ isSelect }) => isSelect ? `color:black;  font-weight: 600;` : `color:gray;`}

    &:hover {
      color: gray;
      font-weight: 400;
      ${({ isSelect }) => isSelect ? `color:black;  font-weight: 600;` : `color:gray;`}

    }
  }

`;
export const ResultMessage = styled.div`
  font-size: 16px;
  color: red;
  font-weight: 600;
  min-height: 20px;
  margin-bottom: 5px;
`;


