import { userConstants } from '../_constants';

const INITIAL_STATE = {
    user:{
        token:'',
        permissions:["REGISTER","LOGIN"]
    },
}

export default function loginApp(state = INITIAL_STATE, action){
    switch(action.type){        

        case userConstants.USER_ACTIONS.LOGIN_REQUEST:
        case userConstants.USER_ACTIONS.LOGIN_SUCCESS:
       
            return {
                user:{
                    ...state.user,
                    name: action.user.name,
                    token: action.user.token,
                    mail: action.user.mail,
                }
            };


        case userConstants.USER_ACTIONS.LOGIN_FAILURE:
            return{
                user:{
                    ...state.user
                }
            }

        case "PERMISSIONS":
            let permissions = Array.isArray(action.permissions) ? action.permissions : state.user.permissions;
            return {
                user:{
                    ...state.user,
                    permissions: permissions
                }
            }

        case "LOGOUT":
            return INITIAL_STATE;

        default:
            console.warn(`invalid action ${action.type} defaulting...`);
            return state;
    }
}