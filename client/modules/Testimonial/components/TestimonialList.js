import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import TestimonialListItem from './TestimonialListItem/TestimonialListItem';
import styles from './TestimonialList.css';

const TestimonialList = ({ testimonials, handleDeleteTestimonial, handleEditTestimonial, isAdmin }) =>
  (testimonials ? (
    <div className={styles.TestimonialList}>
      <h1 className={styles.TestimonialList__title}>
        <FormattedMessage id="testimonialLabel" />
      </h1>
      {testimonials.map(testimonial => (
        <TestimonialListItem
          key={testimonial.cuid}
          testimonial={testimonial}
          onDelete={() => handleDeleteTestimonial(testimonial.cuid)}
          onEdit={() => handleEditTestimonial(testimonial)}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  ) : null);

TestimonialList.propTypes = {
  testimonials: PropTypes.array,
  handleDeleteTestimonial: PropTypes.func.isRequired,
  handleEditTestimonial: PropTypes.func.isRequired,
};

export default TestimonialList;
