import callApi from '../../util/apiCaller';

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const ADD_APPOINTMENTS = 'ADD_APPOINTMENTS';
export const EDIT_APPOINTMENT = 'EDIT_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';

export const addAppointment = appointment => {
  return {
    type: ADD_APPOINTMENT,
    appointment,
  };
};

export const addAppointments = appointments => ({
  type: ADD_APPOINTMENTS,
  appointments,
});

export const fetchAppointments = patientID => dispatch =>
  callApi(`appointments/${patientID}`).then(res => {
    dispatch(addAppointments(res.appointments));
  });

export const fetchAppointment = cuid => dispatch =>
  callApi(`appointments/${cuid}`).then(res => dispatch(addAppointment(res.appointment)));

export const addAppointmentRequest = appointment => {
  return dispatch => {
    return callApi('appointments', 'post', {
      appointment: {
        reason: appointment.reason,
        appointmentDate: appointment.appointmentDate,
        appointmentHour: appointment.appointmentHour,
      },
    }).then(res => dispatch(addAppointment(res.appointment)));
  };
};

export const editAppointment = appointment => {
  return {
    type: EDIT_APPOINTMENT,
    appointment,
  };
};

export const editAppointmentRequest = (reason, appointmentDate, appointmentHour, cuid) => {
  return (dispatch) => {
    return callApi(`appointments/${cuid}`, 'post', {
      appointment: {
        reason,
        appointmentDate,
        appointmentHour,
      },
    }).then(res => dispatch(editAppointment(res.appointment)));
  };
};

export const deleteAppointment = cuid => {
  return {
    type: DELETE_APPOINTMENT,
    cuid,
  };
};

export const deleteAppointmentRequest = cuid => {
  return (dispatch) => {
    return callApi(`appointments/${cuid}`, 'delete').then(() => dispatch(deleteAppointment(cuid)));
  };
};
