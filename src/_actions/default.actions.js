import { AppConstants } from '../_constants';
import { defaultServices } from '../_services';
import { alertActions } from './';

export const defaultActions = {
    getDefaultPermissions,
};

function getDefaultPermissions() {
    return dispatch => {
        dispatch(request());

        defaultServices.getDefaultPermissions()
            .then(permissions => { 
                    dispatch(success(permissions.permissions));
                })
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            })
    };

    function request() { return { type: AppConstants.USER_ACTIONS.SET_PERMISSIONS, permissions:AppConstants.DEFAULT_PERMISSIONS } }
    function success(permissions) { return { type: AppConstants.USER_ACTIONS.SET_PERMISSIONS, permissions} }
    function failure(error) { return { type: AppConstants.SET_PERMISSIONS_FAILURE, error } }
}

