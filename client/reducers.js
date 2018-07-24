/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import services from './modules/Service/ServiceReducer';
import testimonials from './modules/Testimonial/TestimonialReducer';
import servicesWidget from './modules/Service/components/ServiceWidget/ServiceWidgetReducer';
import testimonialsWidget from './modules/Testimonial/components/TestimonialWidget/TestimonialWidgetReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  services,
  servicesWidget,
  testimonials,
  testimonialsWidget,
});
