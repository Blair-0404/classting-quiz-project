import React, { useEffect, useState } from 'react';
import { QuizContainer } from './style';
import Button from '../../components/Button';
import useQuizData from '../../hooks/useQuizData';
import { QuestionType } from '../../types';
import { Example, ExampleWrapper, QuizItemContainer, QuizNumber, ResultMessage, QuestionTitle } from './style';


export interface quizResultListType {
  answerCount: number;
  wrongAnswerCount: number
}

function QuizSetContainer() {
  const { data, isLoading, isError } = useQuizData();
  const [currentQuizNum, setCurrentQuizNum] = useState<number>(0);
  const [quizList, setQuizList] = useState<QuestionType[]>([]);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [selectAnswer, setSelectAnswer] = useState<string>('');
  const [quizResultList, setOpenResultMessage] = useState<quizResultListType>({
    answerCount: 0,
    wrongAnswerCount: 0
  });
  const showResult = (result: string, answer:string) => {
    setResultMessage(result);
    setSelectAnswer(answer);
  };
  
  const handleQuizNumberUpdate = () => {
    if ( currentQuizNum < quizList.length - 1) {
      setCurrentQuizNum(currentQuizNum + 1);
      setResultMessage('');
      setSelectAnswer('');
    } else {
      console.log("ㄱ끝!!!")
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
          <QuizNumber>Question{currentQuizNum + 1} )</QuizNumber>
          <QuestionTitle>{quizList[currentQuizNum]?.question}</QuestionTitle>
          <ExampleWrapper>
            <Example isSelect={selectAnswer === quizList[currentQuizNum]?.correct_answer} disabled={resultMessage.length > 0} onClick={() => showResult('정답입니다.', quizList[currentQuizNum]?.correct_answer)}>1. {quizList[currentQuizNum]?.correct_answer}</Example>
            <Example isSelect={selectAnswer === quizList[currentQuizNum]?.incorrect_answers[0]} disabled={resultMessage.length > 0} onClick={() => showResult('오답입니다.', quizList[currentQuizNum]?.incorrect_answers[0])}>2. {quizList[currentQuizNum]?.incorrect_answers[0]}</Example>
            <Example isSelect={selectAnswer === quizList[currentQuizNum]?.incorrect_answers[1]} disabled={resultMessage.length > 0} onClick={() => showResult('오답입니다.', quizList[currentQuizNum]?.incorrect_answers[1])}>3. {quizList[currentQuizNum]?.incorrect_answers[1]}</Example>
            <Example isSelect={selectAnswer === quizList[currentQuizNum]?.incorrect_answers[2]} disabled={resultMessage.length > 0} onClick={() => showResult('오답입니다.',quizList[currentQuizNum]?.incorrect_answers[2])}>4. {quizList[currentQuizNum]?.incorrect_answers[2]}</Example>
          </ExampleWrapper>
          <ResultMessage>{resultMessage}</ResultMessage>
          <div>
            <Button isEnding={currentQuizNum + 1 === quizList.length} isClickable={resultMessage.length > 0} title={currentQuizNum + 1 !== quizList.length ? "다음 문제" : "결과 보기"} buttonClick={handleQuizNumberUpdate} />
            <div>{currentQuizNum}</div>
          </div>
        </QuizItemContainer>
      }
    </QuizContainer>
  );
}

export default QuizSetContainer;
