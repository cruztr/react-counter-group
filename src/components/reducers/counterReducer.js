import React from 'react';

const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'MULTIPLY_BY_2' : return state*2;
        case 'DIVIDE_BY_2' : return state/2;
        case 'RESET' : return 0;
        default: return state;
    }
};

export default counterReducer;