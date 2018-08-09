import React, { PropTypes } from 'react';

import styles from './AppointmentListItem.css';

const getISODate = date => (date ? new Date(date).toISOString().slice(0, 10) : null);

const AppointmentListItem = ({ appointment }) => (
  <article className={styles.AppointmentListItem}>
    <div className={styles.AppointmentListItem__reason}>
      {appointment.reason}
    </div>
    <div className={styles.AppointmentListItem__content}>
      {getISODate(new Date(appointment.appointmentDate))} / {appointment.appointmentHour}
    </div>
  </article>
);

AppointmentListItem.propTypes = {
  appointment: PropTypes.object,
};

export default AppointmentListItem;
