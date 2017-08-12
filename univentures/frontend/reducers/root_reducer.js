import { combineReducers } from 'redux';

import startupReducer from './startup_reducer';

const rootReducer = combineReducers({
    startup: startupReducer
});

export default rootReducer;