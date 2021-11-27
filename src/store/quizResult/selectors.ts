import { RootState } from '../types';

/**
 * 퀴즈 시험 결과를 반환한다.
 */
export const getQuizResult = (state: RootState) => state.result;
