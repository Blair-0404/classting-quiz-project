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
  const handleNextButtonClick = () => {
    console.log("다음문제클릭");
  }

  useEffect(() => {
    data && dispatch(setQuizList(data.results));
  });

  return (
    <QuizContainer>
      <QuizItem />
      <Button title="다음 문제" buttonClick={handleNextButtonClick} />
    </QuizContainer>
  );
}

export default QuizSetContainer;
