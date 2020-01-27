

const INITIAL_STATE = {
    user:{
        token:'',
        permissions:["REGISTER","LOGIN"]
    },
}

export default function loginApp(state = INITIAL_STATE, action){
    switch(action.type){        

        case "LOGIN":
            return {
                user:{
                    ...state.user,
                    name: action.name,
                    token: action.token,
                    mail: action.mail,
                }
            };

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