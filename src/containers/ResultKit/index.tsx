import React from 'react';
import { Link } from 'react-router-dom';
import { ResultContainer, Time, Result, Restart } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizResult } from '../../store/quizResult/selectors';
import { updateStartTime } from '../../store/quizResult';

function ResultKit() {
  const quizResult = useSelector(getQuizResult);
  const dispatch = useDispatch();
  
  return (
    <ResultContainer>
      <Time>소요시간 {(quizResult.endTime.getTime() - quizResult.startTime.getTime()) / 1000 / 60} </Time>
      <Result>정답갯수 : {quizResult.answerCount} 개</Result>
      <Result>오답갯수 : {quizResult.wrongAnswerCount} 개</Result>
     <div onClick={() => dispatch(updateStartTime(new Date()))}>
      <Link to="/quiz">
        <Restart >다시 풀기</Restart>
      </Link>
     </div>
    </ResultContainer>
  );
}

export default ResultKit;
