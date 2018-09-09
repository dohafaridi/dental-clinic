import { SET_DEFAULT_CMS_PAGE_WIDGET_VALUES } from './CMSPageWidgetActions';

const initialState = {
  defaultValues: {
    cmsPageWidgetTitleIntId: 'createNewCMSPage',
    titleInputValue: '',
    contentTextareaValue: '',
    cuid: '',
  },
};

const CMSPageWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_CMS_PAGE_WIDGET_VALUES:
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

export default CMSPageWidgetReducer;
