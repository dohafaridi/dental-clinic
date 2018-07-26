import {
  TOGGLE_SHOW_SERVICE_WIDGET,
  TOGGLE_SHOW_TESTIMONIAL_WIDGET,
  TOGGLE_SHOW_PATIENT_WIDGET,
} from './AppActions';

const initialState = {
  showServiceWidget: false,
  showTestimonialWidget: false,
  showPatientWidget: false,
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

    case TOGGLE_SHOW_PATIENT_WIDGET:
      return {
        showPatientWidget: !state.showPatientWidget,
      };

    default:
      return state;
  }
};

export default AppReducer;
