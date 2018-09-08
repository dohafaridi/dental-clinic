import { SET_LOGIN_STATUS } from './LoginDropdownActions';

const initialState = {
  isAdmin: false,
  usernameId: '',
};

const loginDropdownReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default loginDropdownReducer;
