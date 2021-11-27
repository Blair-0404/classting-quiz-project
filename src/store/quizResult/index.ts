import { createSlice } from '@reduxjs/toolkit';

interface quizResultState {
  answerCount: number;
  wrongAnswerCount: number
}

const initialState: quizResultState = {
  answerCount: 0,
  wrongAnswerCount: 0
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    incrementAnswerCount: (state) => {
      state.answerCount += 1;
    },
    incrementWrongAnswerCount: state => {
      state.wrongAnswerCount += 1;
    },
    resetQuizResult: state => {
      state.answerCount = 0;
      state.wrongAnswerCount = 0;
    }
  }
});

export const { resetQuizResult, incrementAnswerCount, incrementWrongAnswerCount } = resultSlice.actions;


export default resultSlice.reducer;
