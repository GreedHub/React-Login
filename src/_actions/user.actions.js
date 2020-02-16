import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user.data));
                    localStorage.setItem('user', JSON.stringify(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.USER_ACTIONS.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_ACTIONS.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_ACTIONS.LOGIN_FAILURE, error } }
}

function logout(username, password) {
    localStorage.removeItem('user');

    history.push('/');
    
    return dispatch=>{
        dispatch({type:"LOGOUT"})
    }
}

function register(username, password) {
 /*    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } } */
}