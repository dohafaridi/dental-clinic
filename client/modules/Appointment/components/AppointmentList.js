import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import AppointmentListItem from './AppointmentListItem/AppointmentListItem';
import styles from './AppointmentList.css';

const AppointmentList = ({ appointments, handleDeleteAppointment, handleEditAppointment }) =>
  (appointments ? (
    <div className={styles.AppointmentList}>
      <h1 className={styles.AppointmentList__title}>
        <FormattedMessage id="appointmentLabel" />
      </h1>
      {appointments.map(appointment => (
        <AppointmentListItem
          key={appointment.cuid}
          appointment={appointment}
          onDelete={() => handleDeleteAppointment(appointment.cuid)}
          onEdit={() => handleEditAppointment(appointment)}
        />
      ))}
    </div>
  ) : null);

AppointmentList.propTypes = {
  appointments: PropTypes.array,
  handleDeleteAppointment: PropTypes.func.isRequired,
  handleEditAppointment: PropTypes.func.isRequired,
};

export default AppointmentList;
