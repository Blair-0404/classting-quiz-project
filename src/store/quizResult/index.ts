import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface quizResultState {
  answerCount: number;
  wrongAnswerCount: number
  startTime: Date;
  endTime: Date;
}

const initialState: quizResultState = {
  answerCount: 0,
  wrongAnswerCount: 0,
  startTime: new Date(),
  endTime: new Date()
};

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
      incrementAnswerCount: (state) => {
        return { ...state, answerCount: state.answerCount + 1 };
      },
      incrementWrongAnswerCount: state => {
        return { ...state, wrongAnswerCount: state.wrongAnswerCount + 1 };
      },
      updateStartTime: (state, action: PayloadAction<Date>) => {
        state.startTime = action.payload;
        return state;
      },
      updateEndTime: (state, action: PayloadAction<Date>) => {
        state.endTime = action.payload;
        return state;
      },
      resetQuizResult: (state) => {
        return { ...state, answerCount: 0, wrongAnswerCount: 0 };
      }
    }
  })
;

export const {
  resetQuizResult,
  incrementAnswerCount,
  incrementWrongAnswerCount,
  updateEndTime,
  updateStartTime
} = resultSlice.actions;


export default resultSlice.reducer;
