export const INCREASEACTION = {type: 'increase'};
export const DECREASEACTION = {type: 'decrease'};

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
