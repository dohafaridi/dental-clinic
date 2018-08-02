import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import MedicalTreatmentListItem from './MedicalTreatmentListItem/MedicalTreatmentListItem';
import styles from './MedicalTreatmentList.css';

const MedicalTreatmentList = ({ medicalTreatments, handleDeleteMedicalTreatment, handleEditMedicalTreatment }) =>
  (medicalTreatments ? (
    <div className={styles.MedicalTreatmentList}>
      <h1 className={styles.MedicalTreatmentList__title}>
        <FormattedMessage id="medicalTreatmentLabel" />
      </h1>
      {medicalTreatments.map(medicalTreatment => (
        <MedicalTreatmentListItem
          key={medicalTreatment.cuid}
          medicalTreatment={medicalTreatment}
          onDelete={() => handleDeleteMedicalTreatment(medicalTreatment.cuid)}
          onEdit={() => handleEditMedicalTreatment(medicalTreatment)}
        />
      ))}
    </div>
  ) : null);

MedicalTreatmentList.propTypes = {
  medicalTreatments: PropTypes.array,
  handleDeleteMedicalTreatment: PropTypes.func.isRequired,
  handleEditMedicalTreatment: PropTypes.func.isRequired,
};

export default MedicalTreatmentList;
