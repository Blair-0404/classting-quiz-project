import { fetcher } from '../api/index';
import useSWR from 'swr';

function useQuizData () {
  const { data, error } = useSWR('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple', fetcher)
  
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useQuizData;
