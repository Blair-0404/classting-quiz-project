import React from 'react';
import useQuizData from './hooks/useQuizData';
import QuizSetContainer from './containers/QuizSetContainer';

function App() {
  const { data, isLoading, isError } = useQuizData();
  
  console.log("results",data?.results)
  return (
    <div>
      {isLoading && <div>로딩중입니다.</div>}
      {data&&<div><QuizSetContainer/></div>}
      
    </div>
  );
}

export default App;
