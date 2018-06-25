import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './ServiceDetailPage.css';

import { fetchService } from '../../ServiceActions';

const ServiceDetailPage = ({ service }) => (
  <div className={styles.ServiceDetailPage}>
    <h1 className={styles.ServiceDetailPage__title}>{service.title}</h1>
    <div className={styles.ServiceDetailPage__content}>{service.content}</div>
  </div>
);

// Actions required to provide data for this component to render in server side.
ServiceDetailPage.need = [
  params => {
    return fetchService(params.slug);
  },
];

// Retrieve data from store as props
const mapStateToProps = (state, props) => ({
  service: state.services.data.filter(service => service.slug === props.params.slug)[0],
});

ServiceDetailPage.propTypes = {
  service: PropTypes.object,
};

export default connect(mapStateToProps)(ServiceDetailPage);
