import { createStore, applyMiddleware } from 'redux';
<<<<<<< f840553cf048d257a7a14bcf83977039c39c0cf7
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger());
}
=======
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
>>>>>>> add store.js

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
<<<<<<< f840553cf048d257a7a14bcf83977039c39c0cf7
        applyMiddleware(...middlewares)
=======
        applyMiddleware(thunk, logger)
>>>>>>> add store.js
    )
);

export default configureStore;