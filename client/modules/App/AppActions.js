export const TOGGLE_SHOW_SERVICE_WIDGET = 'TOGGLE_SHOW_SERVICE_WIDGET';
export const TOGGLE_SHOW_TESTIMONIAL_WIDGET = 'TOGGLE_SHOW_TESTIMONIAL_WIDGET';

export const toggleShowServiceWidget = () => {
  return {
    type: TOGGLE_SHOW_SERVICE_WIDGET,
  };
};

export const toggleShowTestimonialWidget = () => {
  return {
    type: TOGGLE_SHOW_TESTIMONIAL_WIDGET,
  };
};
