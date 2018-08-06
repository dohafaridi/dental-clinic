import callApi from '../../util/apiCaller';

export const ADD_MEDICAL_TREATMENT = 'ADD_MEDICAL_TREATMENT';
export const ADD_MEDICAL_TREATMENTS = 'ADD_MEDICAL_TREATMENTS';
export const EDIT_MEDICAL_TREATMENT = 'EDIT_MEDICAL_TREATMENT';
export const DELETE_MEDICAL_TREATMENT = 'DELETE_MEDICAL_TREATMENT';

export const addMedicalTreatment = medicalTreatment => {
  return {
    type: ADD_MEDICAL_TREATMENT,
    medicalTreatment,
  };
};

export const addMedicalTreatments = medicalTreatments => ({
  type: ADD_MEDICAL_TREATMENTS,
  medicalTreatments,
});

export const fetchMedicalTreatments = (patientID) => dispatch =>
  callApi(`medicalTreatments/${patientID}`).then(res => {
    dispatch(addMedicalTreatments(res.medicalTreatments));
  });

export const addMedicalTreatmentRequest = medicalTreatment => {
  return dispatch => {
    return callApi('medicalTreatments', 'post', {
      medicalTreatment: {
        title: medicalTreatment.title,
        content: medicalTreatment.content,
        cost: medicalTreatment.cost,
        patientID: medicalTreatment.patientID,
      },
    }).then(res => dispatch(addMedicalTreatment(res.medicalTreatment)));
  };
};

export const editMedicalTreatment = medicalTreatment => {
  return {
    type: EDIT_MEDICAL_TREATMENT,
    medicalTreatment,
  };
};

export const editMedicalTreatmentRequest = (title, content, cost, cuid) => {
  return (dispatch) => {
    return callApi(`medicalTreatments/${cuid}`, 'post', {
      medicalTreatment: {
        title,
        content,
        cost,
      },
    }).then(res => dispatch(editMedicalTreatment(res.medicalTreatment)));
  };
};

export const deleteMedicalTreatment = cuid => {
  return {
    type: DELETE_MEDICAL_TREATMENT,
    cuid,
  };
};

export const deleteMedicalTreatmentRequest = cuid => {
  return (dispatch) => {
    return callApi(`medicalTreatments/${cuid}`, 'delete').then(() => dispatch(deleteMedicalTreatment(cuid)));
  };
};
