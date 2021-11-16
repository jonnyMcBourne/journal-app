import {AUTH} from '../types/authTypes';
export const authReducer = (state = {}, action ) => {
    switch (action.type) {
        case AUTH.LOGIN:
            return { 
                uid: action.payload.id, 
                name:action.payload.displayName 
            }    
        
        case AUTH.LOGOUT:
            return {}
            
        default:
            return state;
    }
}