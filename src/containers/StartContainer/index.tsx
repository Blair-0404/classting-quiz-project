import React from 'react';
import { Link } from 'react-router-dom';

import {QuizStartContainer, Title} from './style'

function StartContainer() {
  return (
    <QuizStartContainer>
    <Link to="/quiz">
      <Title>Start Quiz ➡</Title>
    </Link>
    </QuizStartContainer>
  );
}

export default StartContainer;
