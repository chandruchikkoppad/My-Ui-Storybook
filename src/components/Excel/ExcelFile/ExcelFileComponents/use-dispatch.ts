import { useContextSelector } from 'use-context-selector';
import context, { Dispatch } from './context';

function useDispatch(): Dispatch {
  return useContextSelector(context, ([, dispatch]) => dispatch);
}

export default useDispatch;
