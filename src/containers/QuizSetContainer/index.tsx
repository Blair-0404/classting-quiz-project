import React, { useEffect, useState } from 'react';
import QuizItem from '../../components/QuizItem';
import { QuizContainer } from './style';
import Button from '../../components/Button';
import useQuizData from '../../hooks/useQuizData';
import { Question } from '../../types';
// import { useDispatch, useSelector } from 'react-redux';
// import { setQuizList } from '../../store/quizSet';
// import { getQuizSetList } from '../../store/quizSet/selectors';

function QuizSetContainer() {
  const { data, isLoading, isError } = useQuizData();
  const [currentQuizNum, setCurrentQuizNum] = useState<number>(0);
  const [quizList, setQuizList] = useState<Question[]>([]);
  // const dispatch = useDispatch();
  // const quizSetList = useSelector(getQuizSetList);
  
  const handleQuizNumberUpdate = () => {
    if(currentQuizNum < quizList.length -1) {
    setCurrentQuizNum(currentQuizNum+1)
    }
  };
  
  useEffect(() => {
    data && setQuizList(data.results);
    console.log('quizList', quizList);
  }, [data]);
  
  return (
    <QuizContainer>
      {isLoading ? <div>로딩중 입니다.</div> :
        <>
          <QuizItem
            quizNumber={currentQuizNum + 1}
            question={quizList[currentQuizNum]?.question}
                    correct_answer={quizList[currentQuizNum]?.correct_answer}
                    incorrect_answers={quizList[currentQuizNum]?.incorrect_answers} />
          <Button title="다음 문제" buttonClick={handleQuizNumberUpdate} />
        </>}
    </QuizContainer>
  );
}

export default QuizSetContainer;
