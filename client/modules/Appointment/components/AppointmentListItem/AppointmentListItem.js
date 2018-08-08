import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './AppointmentListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const AppointmentListItem = ({ appointment, onDelete, onEdit }) => (
  <article className={styles.AppointmentListItem}>
    <div className={styles.AppointmentListItem__title}>
      <Link to={`/appointments/${appointment.slug}`} title={appointment.title}>
        {appointment.title}
      </Link>
    </div>
    <div className={styles.AppointmentListItem__content}>
      {renderContent(appointment.content)}...
    </div>
    <div className={styles.AppointmentListItem__links}>
      <a
        href="#"
        className={styles['AppointmentListItem__links--item']}
        onClick={onEdit}
      >
        <FormattedMessage id="editAppointment" />
      </a>
      <a
        href="#"
        className={styles['AppointmentListItem__links--item']}
        onClick={onDelete}
      >
        <FormattedMessage id="deleteAppointment" />
      </a>
      <Link
        to={`/appointments/${appointment.slug}`}
        className={styles['AppointmentListItem__links--item']}
      >
        {<FormattedMessage id="readMore" />}
      </Link>
    </div>
  </article>
);

AppointmentListItem.propTypes = {
  appointment: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AppointmentListItem;
