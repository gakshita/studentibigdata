import { LOGIN_SUCCESS, LOGIN_ERROR } from './../action/type';

const initial_state = {
  login: false,
  token: '',
};

function login_reducer(state = initial_state, action) {
    console.log("reducer")

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                login : true,
                token : action.payload
            }
        default:
            return state;
    }
    
}

export default login_reducer;