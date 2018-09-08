import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './PatientListItem.css';

const PatientListItem = ({ patient, onDelete, onEdit, isAdmin }) => (
  <article className={styles.PatientListItem}>
    <div className={styles.PatientListItem__information}>
      <div className={styles['PatientListItem__information--fullName']}>
        <Link to={`/patients/${patient.slug}`} title={patient.firstName}>
          {patient.firstName} {patient.lastName}
        </Link>
      </div>
      <div className={styles['PatientListItem__information--doctor']}>
        Doctor : {patient.doctor}
      </div>
    </div>
    <div className={styles.PatientListItem__content}>
      {patient.phone} / {patient.email}
    </div>
    <div className={styles.PatientListItem__links}>
      {isAdmin ? (
        <a
          href="#"
          className={styles['PatientListItem__links--item']}
          onClick={onEdit}
        >
          <FormattedMessage id="editPatient" />
        </a>
      ) : null}
      {isAdmin ? (
        <a
          href="#"
          className={styles['PatientListItem__links--item']}
          onClick={onDelete}
        >
          <FormattedMessage id="deletePatient" />
        </a>
      ) : null}
      <Link
        to={`/patients/${patient.slug}`}
        className={styles['PatientListItem__links--item']}
      >
        {<FormattedMessage id="readMore" />}
      </Link>
    </div>
  </article>
);

PatientListItem.propTypes = {
  patient: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default PatientListItem;
