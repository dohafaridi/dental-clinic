import {
  ADD_PATIENT,
  ADD_PATIENTS,
  DELETE_PATIENT,
  EDIT_PATIENT,
} from './PatientActions';

const initialState = { data: [] };

const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        data: [action.patient, ...state.data],
      };

    case ADD_PATIENTS:
      return {
        data: action.patients,
      };

    case EDIT_PATIENT:
      return {
        data: state.data.map(
          patient =>
            (patient.cuid === action.patient.cuid ? action.patient : patient)
        ),
      };

    case DELETE_PATIENT:
      return {
        data: state.data.filter(patient => patient.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default PatientReducer;
