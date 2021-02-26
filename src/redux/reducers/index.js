import { combineReducers } from 'redux';

import userReducer from './user';
import photoReducer from './photo';

const rootReducer = combineReducers({
    photo: photoReducer
});

export default rootReducer;
