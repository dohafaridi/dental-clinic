import callApi from '../../util/apiCaller';

export const ADD_SERVICE = 'ADD_SERVICE';
export const ADD_SERVICES = 'ADD_SERVICES';

export function addService(service) {
  return {
    type: ADD_SERVICE,
    service,
  };
}

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
    return callApi('services', 'service', {
      service: {
        title: service.title,
        content: service.content,
      },
    }).then(res => dispatch(addService(res.service)));
  };
};
