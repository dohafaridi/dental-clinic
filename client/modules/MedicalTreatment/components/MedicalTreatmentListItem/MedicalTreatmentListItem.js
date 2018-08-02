import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './MedicalTreatmentListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const MedicalTreatmentListItem = ({ medicalTreatment, onDelete, onEdit }) => (
  <article className={styles.MedicalTreatmentListItem}>
    <div className={styles.MedicalTreatmentListItem__title}>
      <Link to={`/medicalTreatments/${medicalTreatment.slug}`} title={medicalTreatment.title}>
        {medicalTreatment.title}
      </Link>
    </div>
    <div className={styles.MedicalTreatmentListItem__content}>
      {renderContent(medicalTreatment.content)}...
    </div>
    <div className={styles.MedicalTreatmentListItem__links}>
      <a
        href="#"
        className={styles['MedicalTreatmentListItem__links--item']}
        onClick={onEdit}
      >
        <FormattedMessage id="editMedicalTreatment" />
      </a>
      <a
        href="#"
        className={styles['MedicalTreatmentListItem__links--item']}
        onClick={onDelete}
      >
        <FormattedMessage id="deleteMedicalTreatment" />
      </a>
      <Link
        to={`/medicalTreatments/${medicalTreatment.slug}`}
        className={styles['MedicalTreatmentListItem__links--item']}
      >
        {<FormattedMessage id="readMore" />}
      </Link>
    </div>
  </article>
);

MedicalTreatmentListItem.propTypes = {
  medicalTreatment: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default MedicalTreatmentListItem;
