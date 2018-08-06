import { SET_DEFAULT_MEDICAL_TREATMENT_WIDGET_VALUES } from './MedicalTreatmentWidgetActions';

const initialState = {
  defaultValues: {
    medicalTreatmentWidgetTitleIntId: 'createNewMedicalTreatment',
    titleInputValue: '',
    contentTextareaValue: '',
    costInputValue: '',
    cuid: '',
  },
};

const MedicalTreatmentWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_MEDICAL_TREATMENT_WIDGET_VALUES:
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

export default MedicalTreatmentWidgetReducer;
