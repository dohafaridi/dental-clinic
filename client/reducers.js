/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import services from './modules/Service/ServiceReducer';
import servicesWidget from './modules/Service/components/ServiceWidget/ServiceWidgetReducer';
import testimonials from './modules/Testimonial/TestimonialReducer';
import testimonialsWidget from './modules/Testimonial/components/TestimonialWidget/TestimonialWidgetReducer';
import patients from './modules/Patient/PatientReducer';
import patientsWidget from './modules/Patient/components/PatientWidget/PatientWidgetReducer';
import medicalTreatments from './modules/MedicalTreatment/MedicalTreatmentReducer';
import medicalTreatmentsWidget from './modules/MedicalTreatment/components/MedicalTreatmentWidget/MedicalTreatmentWidgetReducer';
import appointments from './modules/Appointment/AppointmentReducer';
import appointmentsWidget from './modules/Appointment/components/AppointmentWidget/AppointmentWidgetReducer';
import account from './modules/Account/AccountReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  services,
  servicesWidget,
  testimonials,
  testimonialsWidget,
  patients,
  patientsWidget,
  medicalTreatments,
  medicalTreatmentsWidget,
  appointments,
  appointmentsWidget,
  account,
});
