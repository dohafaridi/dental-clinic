import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './CMSPageDetailPage.css';

import { fetchCMSPage } from '../../CMSPageActions';

const CMSPageDetailPage = ({ cmsPage }) => (
  <div className={styles.CMSPageDetailPage}>
    <h1 className={styles.CMSPageDetailPage__title}>{cmsPage.title}</h1>
    <div className={styles.CMSPageDetailPage__content}>{cmsPage.content}</div>
  </div>
);

// Actions required to provide data for this component to render in server side.
CMSPageDetailPage.need = [
  params => {
    return fetchCMSPage(params.slug);
  },
];

// Retrieve data from store as props
const mapStateToProps = (state, props) => ({
  cmsPage: state.cmsPages.data.filter(cmsPage => cmsPage.slug === props.params.slug)[0],
});

CMSPageDetailPage.propTypes = {
  cmsPage: PropTypes.object,
};

export default connect(mapStateToProps)(CMSPageDetailPage);
