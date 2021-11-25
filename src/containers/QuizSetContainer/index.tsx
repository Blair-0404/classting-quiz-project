import React, { useEffect } from 'react';
import QuizItem from '../../components/QuizItem';
import { QuizContainer } from './style';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import useQuizData from '../../hooks/useQuizData';
import { setQuizList } from '../../store/quizSet';

function QuizSetContainer() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuizData();

  useEffect(() => {
    data && dispatch(setQuizList(data.results));
  });

  return (
    <QuizContainer>
      <QuizItem />
      <Button />
    </QuizContainer>
  );
}

export default QuizSetContainer;
