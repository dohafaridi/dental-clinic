import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './MedicalTreatmentListItem.css';

const getISODate = date => (date ? new Date(date).toISOString().slice(0, 10) : null);

const MedicalTreatmentListItem = ({ medicalTreatment, onDelete, onEdit }) => (
  <article className={styles.MedicalTreatmentListItem}>
    <div className={styles.MedicalTreatmentListItem__title}>
      {medicalTreatment.title}
    </div>
    <div className={styles.MedicalTreatmentListItem__content}>
      {medicalTreatment.content}
    </div>
    <div className={styles.MedicalTreatmentListItem__cost}>
      {medicalTreatment.cost} DH
    </div>
    <div className={styles['MedicalTreatmentListItem__date-added']}>
      {getISODate(new Date(medicalTreatment.dateAdded))}
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
    </div>
  </article>
);

MedicalTreatmentListItem.propTypes = {
  medicalTreatment: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default MedicalTreatmentListItem;
