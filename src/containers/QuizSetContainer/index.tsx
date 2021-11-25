import React from 'react';
import QuizItem from '../../components/QuizItem';
import { QuizContainer } from './style';
import Button from '../../components/Button';

function QuizSetContainer() {
  return (
    <QuizContainer>
      <QuizItem />
      <Button />
    </QuizContainer>
  );
}

export default QuizSetContainer;
