import {
  ADD_ACCOUNT,
  EDIT_ACCOUNT,
} from './AccountActions';

const initialState = {
  data: {
    patientID: null,
    userName: null,
    password: null,
    isActiveAccount: true,
  },
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        data: Object.assign({}, state.data, action.account),
      };

    case EDIT_ACCOUNT:
      return {
        data: state.data.map(
          account =>
            (account.cuid === action.account.cuid ? action.account : account)
        ),
      };

    default:
      return state;
  }
};

export default AccountReducer;
