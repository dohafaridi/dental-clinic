import { SET_DEFAULT_SERVICE_WIDGET_VALUES } from './ServiceWidgetActions';

const initialState = {
  defaultValues: {
    serviceWidgetTitle: 'createNewService',
    titleInputValue: '',
    contentTextareaValue: '',
  },
};

const ServiceWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_SERVICE_WIDGET_VALUES:
      return [state.defaultValues, ...action.defaultValues];

    default:
      return state;
  }
};

export default ServiceWidgetReducer;
