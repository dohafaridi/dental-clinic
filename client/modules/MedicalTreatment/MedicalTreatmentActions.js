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

export const fetchMedicalTreatments = () => dispatch =>
  callApi('medicalTreatments').then(res => {
    dispatch(addMedicalTreatments(res.medicalTreatments));
  });

export const fetchMedicalTreatment = slug => dispatch =>
  callApi(`medicalTreatments/${slug}`).then(res => dispatch(addMedicalTreatment(res.medicalTreatment)));

export const addMedicalTreatmentRequest = medicalTreatment => {
  return dispatch => {
    return callApi('medicalTreatments', 'post', {
      medicalTreatment: {
        title: medicalTreatment.title,
        content: medicalTreatment.content,
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

export const editMedicalTreatmentRequest = (title, content, cuid) => {
  return (dispatch) => {
    return callApi(`medicalTreatments/${cuid}`, 'post', {
      medicalTreatment: {
        title,
        content,
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
