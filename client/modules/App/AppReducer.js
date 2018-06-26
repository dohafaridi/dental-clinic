import { TOGGLE_ADD_SERVICE } from './AppActions';

const initialState = {
  showAddService: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_SERVICE:
      return {
        showAddService: !state.showAddService,
      };

    default:
      return state;
  }
};

export default AppReducer;
