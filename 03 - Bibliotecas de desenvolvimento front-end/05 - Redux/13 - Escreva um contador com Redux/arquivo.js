const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
    // Define the counter reducer which will increment or decrement the state based on the action it receives
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const incAction = () => {
    // Define an action creator for incrementing
    return {
        type: INCREMENT
    };
};

const decAction = () => {
    // Define an action creator for decrementing
    return {
        type: DECREMENT
    };
};

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers