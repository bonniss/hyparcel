export const Up = state => {
    const newState = {...state};
    newState.tabs.counter.count = state.tabs.counter.count + 1;
    return newState;
};

export const Down = state => {
    const newState = {...state};
    newState.tabs.counter.count = state.tabs.counter.count - 1;
    return newState;
};
