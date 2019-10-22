import React from 'react';

export const increment = () => {
    return {
        type : 'INCREMENT'
    }
};

export const decrement = () => {
    return {
        type : 'DECREMENT'
    }
};

export const multiplyByTwo = () => {
    return {
        type : 'MULTIPLY_BY_2'
    }
};

export const divideByTwo = () => {
    return {
        type : 'DIVIDE_BY_2'
    }
};

export const reset = () => {
    return {
        type : 'RESET'
    }
};