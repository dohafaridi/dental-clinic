import {
  ADD_MEDICAL_TREATMENT,
  ADD_MEDICAL_TREATMENTS,
  DELETE_MEDICAL_TREATMENT,
  EDIT_MEDICAL_TREATMENT,
} from './MedicalTreatmentActions';

const initialState = { data: [] };

const MedicalTreatmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDICAL_TREATMENT:
      return {
        data: [action.medicalTreatment, ...state.data],
      };

    case ADD_MEDICAL_TREATMENTS:
      return {
        data: action.medicalTreatments,
      };

    case EDIT_MEDICAL_TREATMENT:
      return {
        data: state.data.map(
          medicalTreatment =>
            (medicalTreatment.cuid === action.medicalTreatment.cuid ? action.medicalTreatment : medicalTreatment)
        ),
      };

    case DELETE_MEDICAL_TREATMENT:
      return {
        data: state.data.filter(medicalTreatment => medicalTreatment.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default MedicalTreatmentReducer;
