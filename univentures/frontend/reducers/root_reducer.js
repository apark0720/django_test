import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import startupReducer from './startup_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    startup: startupReducer
});

export default rootReducer;