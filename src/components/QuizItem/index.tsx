import React, { useEffect, useState } from 'react';
import { Example, Question, QuizItemContainer, QuizNumber, ExampleWrapper } from './style';

import { QuizItemProps } from './types';


function QuizItem({ question, correct_answer, incorrect_answers, quizNumber }: QuizItemProps) {

  // const  [example, setExample] =  useState<string[]>([correct_answer, ...incorrect_answers])
  return (
    <QuizItemContainer>
      <QuizNumber>문제 {quizNumber}번 </QuizNumber>
      <Question>{question}</Question>
      <ExampleWrapper>
      
      <Example>1. {correct_answer}</Example>
      <Example>2. {incorrect_answers?.[0]}</Example>
      <Example>3. {incorrect_answers?.[1]}</Example>
      <Example>4. {incorrect_answers?.[2]}</Example>
      </ExampleWrapper>
    </QuizItemContainer>
  );
}

export default QuizItem;
