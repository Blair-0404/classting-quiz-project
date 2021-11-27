import React, { useEffect, useState } from 'react';
import { QuizContainer } from './style';
import Button from '../../components/Button';
import useQuizData from '../../hooks/useQuizData';
import { QuestionType } from '../../types';
import { Example, ExampleWrapper, QuizItemContainer, QuizNumber, ResultModal, Question } from './style';


function QuizSetContainer() {
  const { data, isLoading, isError } = useQuizData();
  const [currentQuizNum, setCurrentQuizNum] = useState<number>(0);
  const [quizList, setQuizList] = useState<QuestionType[]>([]);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const showResult = (result: string) => {
    setOpenResultModal(true);
    setResultMessage(result);
  };
  
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
          <QuizItemContainer>
            <QuizNumber>문제 {currentQuizNum + 1}번 </QuizNumber>
            <Question>{quizList[currentQuizNum]?.question}</Question>
            <ExampleWrapper>
              <Example onClick={() => showResult('정답입니다.')}>1. {quizList[currentQuizNum]?.correct_answer}</Example>
              <Example onClick={() => showResult('오답입니다.')}>2. {quizList[currentQuizNum]?.incorrect_answers[0]}</Example>
              <Example onClick={() => showResult('오답입니다.')}>3. {quizList[currentQuizNum]?.incorrect_answers[1]}</Example>
              <Example onClick={() => showResult('오답입니다.')}>4. {quizList[currentQuizNum]?.incorrect_answers[2]}</Example>
            </ExampleWrapper>
            {openResultModal && <ResultModal>{resultMessage}</ResultModal>}
          <Button title="다음 문제" buttonClick={handleQuizNumberUpdate} />
          </QuizItemContainer>
        }
    </QuizContainer>
  );
}

export default QuizSetContainer;
