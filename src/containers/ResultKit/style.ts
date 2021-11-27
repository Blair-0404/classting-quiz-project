import styled from 'styled-components';

export const ResultContainer = styled.div`
  padding: 30px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-color: #e2f5f8;


`;
export const Time = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;

`;
export const Result = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
`;
export const Restart = styled.button`
  color: #f5113b;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid red;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ffefef;
  }
`;
