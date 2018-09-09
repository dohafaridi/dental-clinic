import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import AppointmentListItem from './AppointmentListItem/AppointmentListItem';
import styles from './AppointmentList.css';
import stylesBigCalendar from 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const AppointmentList = ({ appointments }) => {
  if (!appointments.length) {
    return null;
  }
  let eventsList = [];
  appointments.map(appointment => eventsList.push(
    {
      title: 'An appointment',
      startDate: new Date(appointment.appointmentDate),
      endDate: new Date(appointment.appointmentDate),
    }
  ));

  return (appointments.length ? (
    <div className={styles.AppointmentList}>
      <h3 className={styles.AppointmentList__title}>
        Agenda
      </h3>
      <BigCalendar
        events={eventsList}
        startAccessor={'startDate'}
        endAccessor={'endDate'}
        views={['week', 'day', 'month']}
        defaultView={'week'}
      />
    </div>
  ) : null);
};

AppointmentList.propTypes = {
  appointments: PropTypes.array,
};

export default AppointmentList;
