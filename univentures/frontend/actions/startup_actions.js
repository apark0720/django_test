import * as APIUtil from '../utils/startup_api_util';

export const RECEIVE_STARTUPS = 'RECEIVE_STARTUPS';
export const RECEIVE_STARTUP = 'RECEIVE_STARTUP';
export const RECEIVE_STARTUP_ERRORS = 'RECEIVE_STARTUP_ERRORS';
export const CLEAR_STARTUP_ERRORS = 'CLEAR_STARTUP_ERRORS';

// sync action
export const receiveStartups = startups => ({
    type: RECEIVE_STARTUPS,
    startups
});

export const receiveStartup = startup => ({
    type: RECEIVE_STARTUP,
    startup
});

export const receiveStartupErrors = errors => ({
    type: RECEIVE_STARTUP_ERRORS,
    errors
})

export const clearStartupErrors = errors => ({
    type: CLEAR_STARTUP_ERRORS,
    errors
})


// async action
export const fetchStartups = () => dispatch => (
    APIUtil.fetchStartups().then(
        startups => (dispatch(receiveStartups(startups)))
    )
);

export const fetchStartup = id => dispatch => (
    APIUtil.fetchStartup(id).then(
        startup => (dispatch(receiveStartup(startup)))
    )
);

export const createStartup = startup => dispatch => (
    APIUtil.createStartup(startup).then(
        startup => dispatch(receiveStartup(startup)),
        err => dispatch(receiveStartupErrors(err.responseJSON))
    )
);

export const updateStartup = startup => dispatch => (
    APIUtil.updateStartup(startup).then(
        startup => dispatch(receiveStartup(startup)),
        err => dispatch(receiveStartupErrors(err.responseJSON))
    )
);