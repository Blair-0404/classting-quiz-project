import React from 'react';
import useQuizData from './hooks/useQuizData';

function App() {
  const { data, isLoading, isError } = useQuizData();
  
  console.log("results",data.results)
  return (
    <div>
      <div>Hello world!</div>
    </div>
  );
}

export default App;
