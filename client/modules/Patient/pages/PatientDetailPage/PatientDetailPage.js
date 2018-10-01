import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Account from '../../../Account/Account';
import MedicalTreatment from '../../../MedicalTreatment/MedicalTreatment';
import Appointment from '../../../Appointment/Appointment';
import { fetchPatient } from '../../PatientActions';

import styles from './PatientDetailPage.css';

const getISODate = date => (date ? new Date(date).toISOString().slice(0, 10) : null);

const PatientDetailPage = ({ patient, userStatus }) => (
  <div className={styles.PatientDetailPage}>
    {userStatus.isAdmin ? (
      <Account patient={patient} />
     ) : null}
    <h1 className={styles.PatientDetailPage__fullName}>{patient.firstName} {patient.lastName}</h1>
    <div className={styles.PatientDetailPage__field}>{patient.sex} {patient._id} </div>
    <div className={styles.PatientDetailPage__field}>{getISODate(new Date(patient.birthDay))}</div>
    <div className={styles.PatientDetailPage__field}>{patient.phone}</div>
    <div className={styles.PatientDetailPage__field}>{patient.email}</div>
    <div className={styles.PatientDetailPage__field}>{patient.address}</div>
    <div className={styles.PatientDetailPage__field}>{patient.city}</div>
    <div className={styles.PatientDetailPage__field}>{patient.maritalStatus}</div>
    <div className={styles.PatientDetailPage__field}>{patient.company}</div>
    <div className={styles.PatientDetailPage__field}>{patient.doctor}</div>
    {userStatus.isAdmin ? (
      <MedicalTreatment patientID={patient._id} />
    ) : null}
    <Appointment patientID={patient._id} />
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
