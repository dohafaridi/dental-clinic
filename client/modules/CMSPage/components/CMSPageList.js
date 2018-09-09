import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import CMSPageListItem from './CMSPageListItem/CMSPageListItem';
import styles from './CMSPageList.css';

const CMSPageList = ({ cmsPages, handleDeleteCMSPage, handleEditCMSPage, isAdmin }) =>
  (cmsPages ? (
    <div className={styles.CMSPageList}>
      <h1 className={styles.CMSPageList__title}>
        <FormattedMessage id="cmsPageLabel" />
      </h1>
      {cmsPages.map(cmsPage => (
        <CMSPageListItem
          key={cmsPage.cuid}
          cmsPage={cmsPage}
          onDelete={() => handleDeleteCMSPage(cmsPage.cuid)}
          onEdit={() => handleEditCMSPage(cmsPage)}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  ) : null);

CMSPageList.propTypes = {
  cmsPages: PropTypes.array,
  handleDeleteCMSPage: PropTypes.func.isRequired,
  handleEditCMSPage: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
};

export default CMSPageList;
