import callApi from '../../util/apiCaller';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';

export const addAccount = account => {
  return {
    type: ADD_ACCOUNT,
    account,
  };
};

export const fetchAccountsByPatientID = patientID => dispatch =>
  callApi(`account/${patientID}`).then(res => {
    dispatch(addAccount(res.accounts[0]));
  });

export const addAccountRequest = account => {
  return dispatch => {
    return callApi('accounts', 'post', {
      account: {
        userName: account.userName,
        password: account.password,
        patientID: account.patientID,
      },
    }).then(res => dispatch(addAccount(res.account)));
  };
};

export const editAccount = account => {
  return {
    type: EDIT_ACCOUNT,
    account,
  };
};

export const editAccountRequest = (isActiveAccount, _id) => {
  return (dispatch) => {
    return callApi(`accounts/${_id}`, 'post', {
      account: { isActiveAccount },
    }).then(res => dispatch(editAccount(res.account)));
  };
};
