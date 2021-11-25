import React from 'react';
import {QuizItemContainer} from './style'
import QuizItemExample from '../QuizItemExample';


function QuizItem() {
  return (
    <QuizItemContainer>
      퀴즈아이템입니다.
      <QuizItemExample/>
      <QuizItemExample/>
      <QuizItemExample/>
      <QuizItemExample/>
    </QuizItemContainer>
  );
}

export default QuizItem;
