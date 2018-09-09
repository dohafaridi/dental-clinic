import callApi from '../../util/apiCaller';

export const ADD_TESTIMONIAL = 'ADD_TESTIMONIAL';
export const ADD_TESTIMONIALS = 'ADD_TESTIMONIALS';
export const EDIT_TESTIMONIAL = 'EDIT_TESTIMONIAL';
export const DELETE_TESTIMONIAL = 'DELETE_TESTIMONIAL';

export const addTestimonial = testimonial => {
  return {
    type: ADD_TESTIMONIAL,
    testimonial,
  };
};

export const addTestimonials = testimonials => ({
  type: ADD_TESTIMONIALS,
  testimonials,
});

export const fetchTestimonials = () => dispatch =>
  callApi('testimonials').then(res => {
    dispatch(addTestimonials(res.testimonials));
  });

export const fetchHomeTestimonials = () => dispatch =>
  callApi('testimonials/home').then(res => {
    dispatch(addTestimonials(res.testimonials));
  });

export const fetchTestimonial = slug => dispatch =>
  callApi(`testimonials/${slug}`).then(res => dispatch(addTestimonial(res.testimonial)));

export const addTestimonialRequest = testimonial => {
  return dispatch => {
    return callApi('testimonials', 'post', {
      testimonial: {
        title: testimonial.title,
        content: testimonial.content,
        isOnHomePage: testimonial.isOnHomePages,
        patientID: testimonial.patientID,
      },
    }).then(res => dispatch(addTestimonial(res.testimonial)));
  };
};

export const editTestimonial = testimonial => {
  return {
    type: EDIT_TESTIMONIAL,
    testimonial,
  };
};

export const editTestimonialRequest = (title, content, isOnHomePage, patientID, cuid) => {
  return (dispatch) => {
    return callApi(`testimonials/${cuid}`, 'post', {
      testimonial: {
        title,
        content,
        isOnHomePage,
        patientID,
      },
    }).then(res => dispatch(editTestimonial(res.testimonial)));
  };
};

export const deleteTestimonial = cuid => {
  return {
    type: DELETE_TESTIMONIAL,
    cuid,
  };
};

export const deleteTestimonialRequest = cuid => {
  return (dispatch) => {
    return callApi(`testimonials/${cuid}`, 'delete').then(() => dispatch(deleteTestimonial(cuid)));
  };
};
