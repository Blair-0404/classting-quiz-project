// import { QuizItemProps } from '../components/QuizItem/types';

export interface QuizItemProps {
  quizNumber?: number;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionType extends QuizItemProps{
  category:string;
  type: string;
  difficulty: string;
}
