import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './PatientDetailPage.css';

import { fetchPatient } from '../../PatientActions';

const PatientDetailPage = ({ patient }) => (
  <div className={styles.PatientDetailPage}>
    <h1 className={styles.PatientDetailPage__title}>{patient.title}</h1>
    <div className={styles.PatientDetailPage__content}>{patient.content}</div>
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
