import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    count: 0
};

const user = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase('ADD_TODO', (state, action) => {
        // "mutate" the array by calling push()
            state.push(action.payload);
        })
        .addCase('TOGGLE_TODO', (state, action) => {
            const todo = state[action.payload.index];
            // "mutate" the object by overwriting a field
            todo.completed = !todo.completed;
        })
        .addCase('REMOVE_TODO', (state, action) => state.filter((todo, i) => i !== action.payload.index));
});

export default user;
