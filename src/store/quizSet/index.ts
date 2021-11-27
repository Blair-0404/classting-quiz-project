import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  QuestionType } from '../../types';

interface quizSetState {
  quizSetList: QuestionType[]
}

const initialState: quizSetState = {
  quizSetList: [{
    category: 'Sports',
    correct_answer: 'Horse-Riding',
    difficulty: 'easy',
    incorrect_answers: ['Cycling', 'Swimming', 'Running'],
    question: 'Which of the following sports is not part of the triathlon?',
    type: 'multiple'
  }]
};

export const counterSlice = createSlice({
  name: 'quizSet',
  initialState,
  reducers: {
    setQuizList: (state, action: PayloadAction<quizSetState>) => {
      if (action.payload) Object.assign(state, action.payload);
    },
  }
});

export const {setQuizList } = counterSlice.actions;


export default counterSlice.reducer;
