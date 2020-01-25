import AppGlobals from '../config/AppGlobals'

const INITIAL_STATE = {
    loginURL: AppGlobals.baseURL
}

export default function loginApp(state = INITIAL_STATE, action){
    switch(action.type){        
        default:
            return state;
    }
}