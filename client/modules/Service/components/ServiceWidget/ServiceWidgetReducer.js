import { SET_DEFAULT_SERVICE_WIDGET_VALUES } from './ServiceWidgetActions';

const initialState = { 
  defaultValues: {
    serviceWidgetTitle : 'createNewService', 
    titleInputValue : '', 
    contentTextareValue :'' 
  }
};

const ServiceWidgetReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DEFAULT_SERVICE_WIDGET_VALUES:
      console.log(state);
      console.log(action.defautValues);
      return [state.defaultValues, ...action.defautValues];

    default:
      return state;
  }
};

export default ServiceWidgetReducer;
