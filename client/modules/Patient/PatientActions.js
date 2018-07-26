import callApi from '../../util/apiCaller';

export const ADD_PATIENT = 'ADD_PATIENT';
export const ADD_PATIENTS = 'ADD_PATIENTS';
export const EDIT_PATIENT = 'EDIT_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

export const addPatient = patient => {
  return {
    type: ADD_PATIENT,
    patient,
  };
};

export const addPatients = patients => ({
  type: ADD_PATIENTS,
  patients,
});

export const fetchPatients = () => dispatch =>
  callApi('patients').then(res => {
    dispatch(addPatients(res.patients));
  });

export const fetchPatient = slug => dispatch =>
  callApi(`patients/${slug}`).then(res => dispatch(addPatient(res.patient)));

export const addPatientRequest = patient => {
  return dispatch => {
    return callApi('patients', 'post', {
      patient: {
        title: patient.title,
        content: patient.content,
      },
    }).then(res => dispatch(addPatient(res.patient)));
  };
};

export const editPatient = patient => {
  return {
    type: EDIT_PATIENT,
    patient,
  };
};

export const editPatientRequest = (title, content, cuid) => {
  return (dispatch) => {
    return callApi(`patients/${cuid}`, 'post', {
      patient: {
        title,
        content,
      },
    }).then(res => dispatch(editPatient(res.patient)));
  };
};

export const deletePatient = cuid => {
  return {
    type: DELETE_PATIENT,
    cuid,
  };
};

export const deletePatientRequest = cuid => {
  return (dispatch) => {
    return callApi(`patients/${cuid}`, 'delete').then(() => dispatch(deletePatient(cuid)));
  };
};
