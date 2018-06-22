import callApi from '../../util/apiCaller';

export const ADD_SERVICES = 'ADD_SERVICES';

export const addServices = services => ({
  type: ADD_SERVICES,
  services,
});

export const fetchServices = () => dispatch =>
  callApi('services').then(res => {
    dispatch(addServices(res.services));
  });
