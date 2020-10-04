import * as actionTypes from './ActionType'
import axios from 'axios'


export const authStart = ()=>{
  return{
      type: actionTypes.AUTH_START
  }
};

export const authSuccess = (token)=>{
  return{
      type:actionTypes.AUTH_SUCCESS,
      token:token
  }
};

export const authFail = (error)=>{
  return{
      type:actionTypes.AUTH_FAIL,
      error:error
  }
};


const checkAuthTimeout=(expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)
    }
};
export const authLogin = (username,password)=>{
  return dispatch =>{
      dispatch(authStart());
      axios.post('http://127.0.0.1:8000/api/rest-auth/login/',{
          username: username,
          password: password,
      })
          .then(resp=>{
              const token = resp.data.key;
              const expirationDate = new Date().getTime()+3600*1000;
              localStorage.setItem('token',token);
              localStorage.setItem('expirationDate',expirationDate);
              dispatch(authSuccess(token));
              dispatch(checkAuthTimeout(3600))
          })
  }
};
