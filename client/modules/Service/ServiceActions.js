import callApi from '../../util/apiCaller';

export const ADD_SERVICE = 'ADD_SERVICE';
export const ADD_SERVICES = 'ADD_SERVICES';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';

export const addService = service => {
  return {
    type: ADD_SERVICE,
    service,
  };
};

export const addServices = services => ({
  type: ADD_SERVICES,
  services,
});

export const fetchServices = () => dispatch =>
  callApi('services').then(res => {
    dispatch(addServices(res.services));
  });

export const fetchService = slug => dispatch =>
  callApi(`services/${slug}`).then(res => dispatch(addService(res.service)));

export const addServiceRequest = service => {
  return dispatch => {
    return callApi('services', 'post', {
      service: {
        title: service.title,
        content: service.content,
      },
    }).then(res => dispatch(addService(res.service)));
  };
};

export const editService = service => {
  return {
    type: EDIT_SERVICE,
    service,
  };
};

export const editServiceRequest = (title, content, cuid) => {
  return (dispatch) => {
    return callApi(`services/${cuid}`, 'post', {
      service: {
        title,
        content,
      },
    }).then(res => dispatch(editService(res.service)));
  };
};

export const deleteService = cuid => {
  return {
    type: DELETE_SERVICE,
    cuid,
  };
};

export const deleteServiceRequest = cuid => {
  return (dispatch) => {
    return callApi(`services/${cuid}`, 'delete').then(() => dispatch(deleteService(cuid)));
  };
};
