import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './CMSPageListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const CMSPageListItem = ({ cmsPage, onDelete, onEdit, isAdmin }) => (
  <article className={styles.CMSPageListItem}>
    <div className={styles.CMSPageListItem__title}>
      <Link to={`/cmsPages/${cmsPage.slug}`} title={cmsPage.title}>
        {cmsPage.title}
      </Link>
    </div>
    <div className={styles.CMSPageListItem__content}>
      {renderContent(cmsPage.content)}...
    </div>
    <div className={styles.CMSPageListItem__links}>
      {isAdmin ? (
        <a
          href="#"
          className={styles['CMSPageListItem__links--item']}
          onClick={onEdit}
        >
          <FormattedMessage id="editCMSPage" />
        </a>
      ) : null}
      {isAdmin ? (
        <a
          href="#"
          className={styles['CMSPageListItem__links--item']}
          onClick={onDelete}
        >
          <FormattedMessage id="deleteCMSPage" />
        </a>
      ) : null}
      <Link
        to={`/cmsPages/${cmsPage.slug}`}
        className={styles['CMSPageListItem__links--item']}
      >
        {<FormattedMessage id="readMore" />}
      </Link>
    </div>
  </article>
);

CMSPageListItem.propTypes = {
  cmsPage: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CMSPageListItem;
