export const INCREASEACTION = {type: 'INCREASEACTION'};
export const DECREASEACTION = {type: 'DECREASEACTION'};

export function increase() {
    return {
        type: INCREASEACTION
    }
}

export function decrease() {
    return {
        type: DECREASEACTION
    }
}

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
