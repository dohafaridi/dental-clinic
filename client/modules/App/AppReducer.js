import {
  TOGGLE_SHOW_SERVICE_WIDGET,
  TOGGLE_SHOW_TESTIMONIAL_WIDGET,
} from './AppActions';

const initialState = {
  showServiceWidget: false,
  showTestimonialWidget: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_SERVICE_WIDGET:
      return {
        showServiceWidget: !state.showServiceWidget,
      };

    case TOGGLE_SHOW_TESTIMONIAL_WIDGET:
      return {
        showTestimonialWidget: !state.showTestimonialWidget,
      };

    default:
      return state;
  }
};

export default AppReducer;
