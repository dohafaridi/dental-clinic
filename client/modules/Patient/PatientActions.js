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
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
        birthDay: patient.birthDay,
        phone: patient.phone,
        email: patient.email,
        address: patient.address,
        city: patient.city,
        maritalStatus: patient.maritalStatus,
        company: patient.company,
        doctor: patient.doctor,
        insurance: patient.insurance,
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

export const editPatientRequest = (
  firstName,
  lastName,
  sex,
  birthDay,
  phone,
  email,
  address,
  city,
  maritalStatus,
  company,
  doctor,
  insurance,
  cuid
) => {
  return dispatch => {
    return callApi(`patients/${cuid}`, 'post', {
      patient: {
        firstName,
        lastName,
        sex,
        birthDay,
        phone,
        email,
        address,
        city,
        maritalStatus,
        company,
        doctor,
        insurance,
        cuid,
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
  return dispatch => {
    return callApi(`patients/${cuid}`, 'delete').then(() =>
      dispatch(deletePatient(cuid))
    );
  };
};
