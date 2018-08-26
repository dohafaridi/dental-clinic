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
  callApi(`accounts/${patientID}`).then(res => {
    dispatch(addAccounts(res.accounts));
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

export const editAccountRequest = isActiveAccount => {
  return (dispatch) => {
    return callApi(`accounts/${cuid}`, 'post', {
      account: { isActiveAccount },
    }).then(res => dispatch(editAccount(res.account)));
  };
};
