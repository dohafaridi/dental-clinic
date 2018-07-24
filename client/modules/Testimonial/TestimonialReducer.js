import {
  ADD_TESTIMONIAL,
  ADD_TESTIMONIALS,
  DELETE_TESTIMONIAL,
  EDIT_TESTIMONIAL,
} from './TestimonialActions';

const initialState = { data: [] };

const TestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TESTIMONIAL:
      return {
        data: [action.testimonial, ...state.data],
      };

    case ADD_TESTIMONIALS:
      return {
        data: action.testimonials,
      };

    case EDIT_TESTIMONIAL:
      return {
        data: state.data.map(
          testimonial =>
            (testimonial.cuid === action.testimonial.cuid ? action.testimonial : testimonial)
        ),
      };

    case DELETE_TESTIMONIAL:
      return {
        data: state.data.filter(testimonial => testimonial.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default TestimonialReducer;
