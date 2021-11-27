import React from 'react';
import {ResultContainer, Time, Result} from './style'
import { useSelector } from 'react-redux';
import { getQuizResult } from '../../store/quizResult/selectors';

function ResultKit() {
  const quizResult = useSelector(getQuizResult)
  return (
    <ResultContainer>
      <Time>소요시간 10분</Time>
      <Result>정답갯수 : {quizResult.answerCount} 개</Result>
      <Result>오답갯수 : {quizResult.wrongAnswerCount} 개</Result>
    </ResultContainer>
  );
}

export default ResultKit;
