import { SET_DEFAULT_SERVICE_WIDGET_VALUES } from './ServiceWidgetActions';

const initialState = {
  defaultValues: {
    serviceWidgetTitleIntId: 'createNewService',
    titleInputValue: '',
    contentTextareaValue: '',
    cuid: '',
  },
};

const ServiceWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_SERVICE_WIDGET_VALUES:
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

export default ServiceWidgetReducer;
