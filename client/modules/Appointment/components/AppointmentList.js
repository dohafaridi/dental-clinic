import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import styles from './AppointmentList.css';
import stylesBigCalendar from 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
};

const AppointmentList = ({ appointments }) => {
  if (!appointments.length) {
    return null;
  }
  let eventsList = [];
  appointments.map(appointment => eventsList.push(
    {
      title: 'An appointment',
      startDate: new Date(appointment.appointmentDate),
      endDate: new Date(appointment.appointmentDate).addHours(5),
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
        onSelectEvent={event => alert(event.title)}
      />
    </div>
  ) : null);
};

AppointmentList.propTypes = {
  appointments: PropTypes.array,
};

export default AppointmentList;
