import callApi from '../../util/apiCaller';
import { VALID_ADMIN, VALID_ADMIN_PASSWORD } from './constants';

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

export const setLoginStatus = user => ({
  type: SET_LOGIN_STATUS,
  user,
});

export const login = (username, password) => dispatch => {
  if (username === VALID_ADMIN && password === VALID_ADMIN_PASSWORD) {
    dispatch(setLoginStatus({
      isAdmin: true,
      usernameId: VALID_ADMIN,
      userName: VALID_ADMIN,
      password,
    }));
  } else {
    callApi(`login/${username}/${password}`).then(res => dispatch(setLoginStatus({
      isAdmin: false,
      usernameId: res.account[0].userName,
      userName: username,
      password,
    })));
  }
};

export const logout = () => dispatch => {
  sessionStorage.clear();
  dispatch(setLoginStatus({
    isAdmin: false,
    usernameId: '',
    password: '',
    username: '',
  }));
};
