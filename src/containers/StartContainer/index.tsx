import React from 'react';
import { Link } from 'react-router-dom';

import { QuizStartContainer, Title } from './style';
import { updateStartTime } from '../../store/quizResult';
import { useDispatch } from 'react-redux';

function StartContainer() {
  const dispatch = useDispatch();
  return (
    <QuizStartContainer onClick={() => dispatch(updateStartTime(new Date()))}>
      <Link to="/quiz">
        <Title>Start Quiz ➡</Title>
      </Link>
    </QuizStartContainer>
  );
}

export default StartContainer;
