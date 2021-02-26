/* eslint-disable no-case-declarations */
import { createReducer, createAction } from '@reduxjs/toolkit';

const add = createAction('add');
const changeId = createAction('changeId');
const INITIAL_STATE = {
    list: [],
    clickId: ''
};

const photo = createReducer(INITIAL_STATE, {
    [add]: (state, action) => state.push(action.payload),
    [changeId]: (state, action) => {
        state.clickId = action.payload;
    }
});

export default photo;
