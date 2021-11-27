import React, { useState } from 'react';
import { Example, Question, QuizItemContainer, QuizNumber, ExampleWrapper, ResultModal } from './style';

import { QuizItemProps } from './types';


function QuizItem({ question, correct_answer, incorrect_answers, quizNumber }: QuizItemProps) {
  
  const [resultMessage, setResultMessage] = useState<string>('');
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const showResult = (result: string) => {
    setOpenResultModal(true);
    setResultMessage(result);
  };
  return (
    <QuizItemContainer>
      <QuizNumber>문제 {quizNumber}번 </QuizNumber>
      <Question>{question}</Question>
      <ExampleWrapper>
        <Example onClick={() => showResult('정답입니다.')}>1. {correct_answer}</Example>
        <Example onClick={() => showResult('오답입니다.')}>2. {incorrect_answers?.[0]}</Example>
        <Example onClick={() => showResult('오답입니다.')}>3. {incorrect_answers?.[1]}</Example>
        <Example onClick={() => showResult('오답입니다.')}>4. {incorrect_answers?.[2]}</Example>
      </ExampleWrapper>
      {openResultModal && <ResultModal>{resultMessage}</ResultModal>}
    </QuizItemContainer>
  );
}

export default QuizItem;
