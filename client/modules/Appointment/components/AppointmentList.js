import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import AppointmentListItem from './AppointmentListItem/AppointmentListItem';
import styles from './AppointmentList.css';

const AppointmentList = ({ appointments }) =>
  (appointments.length ? (
    <div className={styles.AppointmentList}>
      <h3 className={styles.AppointmentList__title}>
        <FormattedMessage id="appointmentList" />
      </h3>
      {appointments.map(appointment => (
        <AppointmentListItem
          key={appointment.cuid}
          appointment={appointment}
        />
      ))}
    </div>
  ) : null);

AppointmentList.propTypes = {
  appointments: PropTypes.array,
};

export default AppointmentList;
