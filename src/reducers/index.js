

const INITIAL_STATE = {
    token:''
}

export default function loginApp(state = INITIAL_STATE, action){
    switch(action.type){        

        case "LOGIN":
            return {token:action.token};

        default:
            return state;
    }
}