import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './TestimonialDetailPage.css';

import { fetchTestimonial } from '../../TestimonialActions';

const TestimonialDetailPage = ({ testimonial }) => (
  <div className={styles.TestimonialDetailPage}>
    <h1 className={styles.TestimonialDetailPage__title}>{testimonial.title}</h1>
    <div className={styles.TestimonialDetailPage__content}>{testimonial.content}</div>
  </div>
);

// Actions required to provide data for this component to render in server side.
TestimonialDetailPage.need = [
  params => {
    return fetchTestimonial(params.slug);
  },
];

// Retrieve data from store as props
const mapStateToProps = (state, props) => ({
  testimonial: state.testimonials.data.filter(testimonial => testimonial.slug === props.params.slug)[0],
});

TestimonialDetailPage.propTypes = {
  testimonial: PropTypes.object,
};

export default connect(mapStateToProps)(TestimonialDetailPage);
