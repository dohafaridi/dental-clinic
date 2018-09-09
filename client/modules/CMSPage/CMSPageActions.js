import callApi from '../../util/apiCaller';

export const ADD_CMS_PAGE = 'ADD_CMS_PAGE';
export const ADD_CMS_PAGES = 'ADD_CMS_PAGES';
export const EDIT_CMS_PAGE = 'EDIT_CMS_PAGE';
export const DELETE_CMS_PAGE = 'DELETE_CMS_PAGE';

export const addCMSPage = cmsPage => {
  return {
    type: ADD_CMS_PAGE,
    cmsPage,
  };
};

export const addCMSPages = cmsPages => ({
  type: ADD_CMS_PAGES,
  cmsPages,
});

export const fetchCMSPages = () => dispatch =>
  callApi('cmsPages').then(res => {
    dispatch(addCMSPages(res.cmsPages));
  });

export const fetchCMSPage = slug => dispatch =>
  callApi(`cmsPages/${slug}`).then(res => dispatch(addCMSPage(res.cmsPage)));

export const addCMSPageRequest = cmsPage => {
  return dispatch => {
    return callApi('cmsPages', 'post', {
      cmsPage: {
        title: cmsPage.title,
        content: cmsPage.content,
      },
    }).then(res => dispatch(addCMSPage(res.cmsPage)));
  };
};

export const editCMSPage = cmsPage => {
  return {
    type: EDIT_CMS_PAGE,
    cmsPage,
  };
};

export const editCMSPageRequest = (title, content, cuid) => {
  return (dispatch) => {
    return callApi(`cmsPages/${cuid}`, 'post', {
      cmsPage: {
        title,
        content,
      },
    }).then(res => dispatch(editCMSPage(res.cmsPage)));
  };
};

export const deleteCMSPage = cuid => {
  return {
    type: DELETE_CMS_PAGE,
    cuid,
  };
};

export const deleteCMSPageRequest = cuid => {
  return (dispatch) => {
    return callApi(`cmsPages/${cuid}`, 'delete').then(() => dispatch(deleteCMSPage(cuid)));
  };
};
