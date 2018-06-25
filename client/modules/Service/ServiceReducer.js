import { ADD_SERVICE, ADD_SERVICES } from './ServiceActions';

const initialState = { data: [] };

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE :
      return {
        data: [action.service, ...state.data],
      };

    case ADD_SERVICES :
      return {
        data: action.services,
      };

    default:
      return state;
  }
};

export default ServiceReducer;
