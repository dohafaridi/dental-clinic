import { TOGGLE_SHOW_SERVICE_WIDGET } from './AppActions';

const initialState = {
  showServiceWidget: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_SERVICE_WIDGET:
      return {
        showServiceWidget: !state.showServiceWidget,
      };

    default:
      return state;
  }
};

export default AppReducer;
