import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './PatientListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const PatientListItem = ({ patient, onDelete, onEdit }) => (
  <article className={styles.PatientListItem}>
    <div className={styles.PatientListItem__title}>
      <Link to={`/patients/${patient.slug}`} title={patient.title}>
        {patient.title}
      </Link>
    </div>
    <div className={styles.PatientListItem__content}>
      {renderContent(patient.content)}...
    </div>
    <div className={styles.PatientListItem__links}>
      <a
        href="#"
        className={styles['PatientListItem__links--item']}
        onClick={onEdit}
      >
        <FormattedMessage id="editPatient" />
      </a>
      <a
        href="#"
        className={styles['PatientListItem__links--item']}
        onClick={onDelete}
      >
        <FormattedMessage id="deletePatient" />
      </a>
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
