import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import PatientListItem from './PatientListItem/PatientListItem';
import styles from './PatientList.css';

const PatientList = ({ patients, handleDeletePatient, handleEditPatient }) =>
  (patients ? (
    <div className={styles.PatientList}>
      <h1 className={styles.PatientList__title}>
        <FormattedMessage id="patientLabel" />
      </h1>
      {patients.map(patient => (
        <PatientListItem
          key={patient.cuid}
          patient={patient}
          onDelete={() => handleDeletePatient(patient.cuid)}
          onEdit={() => handleEditPatient(patient)}
        />
      ))}
    </div>
  ) : null);

PatientList.propTypes = {
  patients: PropTypes.array,
  handleDeletePatient: PropTypes.func.isRequired,
  handleEditPatient: PropTypes.func.isRequired,
};

export default PatientList;
