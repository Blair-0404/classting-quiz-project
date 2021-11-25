import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Question } from '../../types';

interface quizSetState {
  quizSetList: Question[]
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
    setQuizList: (state, action: PayloadAction<string>) => {
      if (action.payload) Object.assign(state, action.payload);
    },
  }
});

export const {setQuizList } = counterSlice.actions;


export default counterSlice.reducer;
