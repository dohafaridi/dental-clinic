import { ADD_SERVICES } from './ServiceActions';

const initialState = { data: [] };

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICES :
      return {
        data: action.services,
      };

    default:
      return state;
  }
};

export default ServiceReducer;
