import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './TestimonialListItem.css';

const MAX_LENGTH = 300;
const renderContent = content => content.substring(0, MAX_LENGTH);

const TestimonialListItem = ({ testimonial, onDelete, onEdit, userStatus }) => {
  const showUp = userStatus.isAdmin || testimonial.patientID === userStatus.usernameId;
  return (
    <article className={styles.TestimonialListItem}>
      <div className={styles.TestimonialListItem__title}>
        <Link to={`/testimonials/${testimonial.slug}`} title={testimonial.title}>
          {testimonial.title}
        </Link>
      </div>
      <div className={styles.TestimonialListItem__content}>
        {renderContent(testimonial.content)}...
      </div>
      <div className={styles.TestimonialListItem__links}>
        {showUp ? (
          <a
            href="#"
            className={styles['TestimonialListItem__links--item']}
            onClick={onEdit}
          >
            <FormattedMessage id="editTestimonial" />
          </a>
        ) : null}
        {showUp ? (
          <a
            href="#"
            className={styles['TestimonialListItem__links--item']}
            onClick={onDelete}
          >
            <FormattedMessage id="deleteTestimonial" />
          </a>
        ) : null}
        <Link
          to={`/testimonials/${testimonial.slug}`}
          className={styles['TestimonialListItem__links--item']}
        >
          {<FormattedMessage id="readMore" />}
        </Link>
      </div>
    </article>
  );
};

TestimonialListItem.propTypes = {
  testimonial: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  userStatus: PropTypes.object,
};

export default TestimonialListItem;
