/* eslint-disable no-case-declarations */
const INITIAL_STATE = {
    list: [],
    clickId: ''
};

const photo = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
    case 'ADD':
        const newList = [...state.list, payload];
        return {
            ...state,
            list: newList
        };
    case 'CHANGE_CLICK_ID':
        const newId = payload;
        return {
            ...state,
            clickId: newId
        };
    default: return state;
    }
};

export default photo;
