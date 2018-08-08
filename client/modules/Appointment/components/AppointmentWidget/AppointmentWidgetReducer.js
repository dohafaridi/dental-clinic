import { SET_DEFAULT_APPOINTMENT_WIDGET_VALUES } from './AppointmentWidgetActions';

const initialState = {
  defaultValues: {
    appointmentWidgetTitleIntId: 'createNewAppointment',
    dateInputValue: '',
    hourInputValue: '',
    reasonTextareaValue: '',
    cuid: '',
  },
};

const AppointmentWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_APPOINTMENT_WIDGET_VALUES:
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

export default AppointmentWidgetReducer;
