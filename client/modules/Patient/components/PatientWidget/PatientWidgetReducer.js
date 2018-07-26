import { SET_DEFAULT_PATIENT_WIDGET_VALUES } from './PatientWidgetActions';

const initialState = {
  defaultValues: {
    patientWidgetTitleIntId: 'createNewPatient',
    titleInputValue: '',
    contentTextareaValue: '',
    cuid: '',
  },
};

const PatientWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_PATIENT_WIDGET_VALUES:
      return {
        defaultValues:
          action.defaultValues && state.defaultValues
            ? Object.assign(state.defaultValues, {}, action.defaultValues)
            : initialState.defaultValues,
      };

    default:
      return state;
  }
};

export default PatientWidgetReducer;
