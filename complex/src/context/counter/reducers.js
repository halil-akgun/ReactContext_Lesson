import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./actions";
import { counterInitialState } from "./initial-state";

export const counterReducer = (state = counterInitialState, action) => {
    if (action.type === COUNTER_INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1,
        };
    } else if (action.type === COUNTER_DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1,
        };
    } else if (action.type === COUNTER_RESET) {
        return {
            ...state,
            counter: 0,
        };
    } else {
        return state;
    }

    // switch (action.type) {
    //     case COUNTER_INCREMENT:
    //         return {
    //             ...state,
    //             counter: state.counter + 1,
    //         };
    //     case COUNTER_DECREMENT:
    //         return {
    //             ...state,
    //             counter: state.counter - 1,
    //         };
    //     case COUNTER_RESET:
    //         return {
    //             ...state,
    //             counter: 0,
    //         };
    //     default:
    //         return state;
    // }
};
