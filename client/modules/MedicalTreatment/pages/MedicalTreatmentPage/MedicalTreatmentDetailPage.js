import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './MedicalTreatmentDetailPage.css';

import { fetchMedicalTreatment } from '../../MedicalTreatmentActions';

const MedicalTreatmentDetailPage = ({ medicalTreatment }) => (
  <div className={styles.MedicalTreatmentDetailPage}>
    <h1 className={styles.MedicalTreatmentDetailPage__title}>{medicalTreatment.title}</h1>
    <div className={styles.MedicalTreatmentDetailPage__content}>{medicalTreatment.content}</div>
  </div>
);

// Actions required to provide data for this component to render in server side.
MedicalTreatmentDetailPage.need = [
  params => {
    return fetchMedicalTreatment(params.slug);
  },
];

// Retrieve data from store as props
const mapStateToProps = (state, props) => ({
  medicalTreatment: state.medicalTreatments.data.filter(medicalTreatment => medicalTreatment.slug === props.params.slug)[0],
});

MedicalTreatmentDetailPage.propTypes = {
  medicalTreatment: PropTypes.object,
};

export default connect(mapStateToProps)(MedicalTreatmentDetailPage);
