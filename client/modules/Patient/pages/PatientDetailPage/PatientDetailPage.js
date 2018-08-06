import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MedicalTreatment from '../../../MedicalTreatment/MedicalTreatment';
import { fetchPatient } from '../../PatientActions';

import styles from './PatientDetailPage.css';

const PatientDetailPage = ({ patient }) => (
  <div className={styles.PatientDetailPage}>
    <h1 className={styles.PatientDetailPage__fullName}>{patient.firstName} {patient.lastName}</h1>
    <div className={styles.PatientDetailPage__field}>{patient.sex}</div>
    <div className={styles.PatientDetailPage__field}>{patient.birthDay}</div>
    <div className={styles.PatientDetailPage__field}>{patient.phone}</div>
    <div className={styles.PatientDetailPage__field}>{patient.email}</div>
    <div className={styles.PatientDetailPage__field}>{patient.address}</div>
    <div className={styles.PatientDetailPage__field}>{patient.city}</div>
    <div className={styles.PatientDetailPage__field}>{patient.maritalStatus}</div>
    <div className={styles.PatientDetailPage__field}>{patient.company}</div>
    <div className={styles.PatientDetailPage__field}>{patient.doctor}</div>
    <MedicalTreatment patientID={patient._id} />
  </div>
);

// Actions required to provide data for this component to render in server side.
PatientDetailPage.need = [
  params => {
    return fetchPatient(params.slug);
  },
];

// Retrieve data from store as props
const mapStateToProps = (state, props) => ({
  patient: state.patients.data.filter(patient => patient.slug === props.params.slug)[0],
});

PatientDetailPage.propTypes = {
  patient: PropTypes.object,
};

export default connect(mapStateToProps)(PatientDetailPage);
