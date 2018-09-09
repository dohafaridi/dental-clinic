import {
  ADD_CMS_PAGE,
  ADD_CMS_PAGES,
  DELETE_CMS_PAGE,
  EDIT_CMS_PAGE,
} from './CMSPageActions';

const initialState = { data: [] };

const CMSPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CMS_PAGE:
      return {
        data: [action.cmsPage, ...state.data],
      };

    case ADD_CMS_PAGES:
      return {
        data: action.cmsPages,
      };

    case EDIT_CMS_PAGE:
      return {
        data: state.data.map(
          cmsPage =>
            (cmsPage.cuid === action.cmsPage.cuid ? action.cmsPage : cmsPage)
        ),
      };

    case DELETE_CMS_PAGE:
      return {
        data: state.data.filter(cmsPage => cmsPage.cuid !== action.cuid),
      };

    default:
      return state;
  }

  return state;
};

export default CMSPageReducer;
