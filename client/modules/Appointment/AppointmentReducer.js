import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENTS,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
} from './AppointmentActions';

const initialState = { data: [] };

const AppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        data: [action.appointment, ...state.data],
      };

    case ADD_APPOINTMENTS:
      return {
        data: action.appointments,
      };

    case EDIT_APPOINTMENT:
      return {
        data: state.data.map(
          appointment =>
            (appointment.cuid === action.appointment.cuid ? action.appointment : appointment)
        ),
      };

    case DELETE_APPOINTMENT:
      return {
        data: state.data.filter(appointment => appointment.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default AppointmentReducer;
