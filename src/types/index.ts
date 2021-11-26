import { QuizItemProps } from '../components/QuizItem/types';

export interface Question extends QuizItemProps{
  category:string;
  type: string;
  difficulty: string;
}
//
// export interface Problems {
//   problems: Question[];
// }
