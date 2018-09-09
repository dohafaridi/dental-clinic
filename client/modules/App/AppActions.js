export const TOGGLE_SHOW_SERVICE_WIDGET = 'TOGGLE_SHOW_SERVICE_WIDGET';
export const TOGGLE_SHOW_TESTIMONIAL_WIDGET = 'TOGGLE_SHOW_TESTIMONIAL_WIDGET';
export const TOGGLE_SHOW_PATIENT_WIDGET = 'TOGGLE_SHOW_PATIENT_WIDGET';
export const TOGGLE_SHOW_MEDICAL_TREATMENT_WIDGET = 'TOGGLE_SHOW_MEDICAL_TREATMENT_WIDGET';
export const TOGGLE_SHOW_CMS_PAGE_WIDGET = 'TOGGLE_SHOW_CMS_PAGE_WIDGET';

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

export const toggleShowPatientWidget = () => {
  return {
    type: TOGGLE_SHOW_PATIENT_WIDGET,
  };
};

export const toggleShowMedicalTreatmentWidget = () => {
  return {
    type: TOGGLE_SHOW_MEDICAL_TREATMENT_WIDGET,
  };
};

export const toggleShowCMSPageWidget = () => {
  return {
    type: TOGGLE_SHOW_CMS_PAGE_WIDGET,
  };
};
