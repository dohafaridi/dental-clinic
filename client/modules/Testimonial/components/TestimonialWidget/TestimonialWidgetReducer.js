import { SET_DEFAULT_TESTIMONIAL_WIDGET_VALUES } from './TestimonialWidgetActions';

const initialState = {
  defaultValues: {
    testimonialWidgetTitleIntId: 'createNewTestimonial',
    titleInputValue: '',
    contentTextareaValue: '',
    isOnHomeValue: false,
    cuid: '',
  },
};

const TestimonialWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_TESTIMONIAL_WIDGET_VALUES:
      return {
        defaultValues:
          action.defaultValues && state.defaultValues
            ? Object.assign(state.defaultValues, {}, action.defaultValues)
            : initialState.defaultValues,
      };

    default:
      return state;
  }
};

export default TestimonialWidgetReducer;
