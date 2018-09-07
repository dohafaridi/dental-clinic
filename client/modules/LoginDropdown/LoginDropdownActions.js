import { VALID_ADMIN, VALID_ADMIN_PASSWORD } from './constants';

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

export const setLoginStatus = user => ({
  type: SET_LOGIN_STATUS,
  user,
});

export const login = (username, password) => dispatch => {
  if (username === VALID_ADMIN && password === VALID_ADMIN_PASSWORD) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    dispatch(setLoginStatus({
      isAdmin: true,
      usernameId: VALID_ADMIN,
    }));
  }
};

export const logout = () => dispatch => {
  sessionStorage.clear();
  dispatch(setLoginStatus({
    isAdmin: false,
    usernameId: null,
  }));
};
