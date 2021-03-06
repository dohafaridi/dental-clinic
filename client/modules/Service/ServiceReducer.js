import {
  ADD_SERVICE,
  ADD_SERVICES,
  DELETE_SERVICE,
  EDIT_SERVICE,
} from './ServiceActions';

const initialState = { data: [] };

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        data: [action.service, ...state.data],
      };
      
    case ADD_SERVICES:
      return {
        data: action.services,
      };

    case EDIT_SERVICE:
      return {
        data: state.data.map(
          service =>
            (service.cuid === action.service.cuid ? action.service : service)
        ),
      };

    case DELETE_SERVICE:
      return {
        data: state.data.filter(service => service.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default ServiceReducer;
