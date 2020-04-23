import { LOGIN_ERROR, LOGIN_SUCCESS } from './type';
import axios from 'react-native-axios';

export function login_success(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}
export function login_fail(payload) {
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

const savedata = async token => {
  await AsyncStorage.setItem("token", token);
  console.log("token")
};

export function login_action(detail) {
    console.log(detail.username, detail.password)
  return dispatch => {
    axios
      .post('https://api.komunity.app/auth/login', {
        username: detail.username,
        password: detail.password,
      })
      .then(res => {
          return(
              savedata(res.data.token),
              console.log(res.data.token),
              dispatch(login_success())
          )
      })
      .catch(error => {
        return dispatch(login_fail());
      });
  };
}


export  function update_Token (token){
    console.log("this is token" )
    return (dispatch) => {
           return  dispatch(login_success(token ))
        };
 }