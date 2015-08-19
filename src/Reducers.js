import {INCREASEACTION, DECREASEACTION} from './Actions';

// Reducer:
export default function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case INCREASEACTION:
      return {count: count+1};
    case DECREASEACTION:
        return {count: count-1};
    default:
      return state;
  }
}
