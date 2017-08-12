import { merge } from 'lodash';

import {
    RECEIVE_STARTUPS,
    RECEIVE_STARTUP,
    RECEIVE_STARTUP_ERRORS,
    CLEAR_STARTUP_ERRORS
} from '../actions/startup_actions';

const defaultState = {
    entities: {},
    errors: {}
}

const startupsReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_STARTUPS:
            const startups = action.startups;
            return merge({}, state, { entities: startups });

        case RECEIVE_STARTUP:
            const startup = action.startup;
            return merge({}, state, { 
                entities: { [startup.id]: startup }
            });

        case RECEIVE_STARTUP_ERRORS:
            const errors = action.errors;
            return merge({}, state, {
                errors: action.errors
            });

        case CLEAR_STARTUP_ERRORS:
            newState.errors = {};
            return newState;

        default:
            return state;
    }
};

export default startupsReducer;