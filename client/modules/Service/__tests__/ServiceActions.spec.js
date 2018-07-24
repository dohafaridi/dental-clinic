import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_SERVICE,
  DELETE_SERVICE,
  ADD_SERVICES,
  addService,
  deleteService,
  addServices,
} from '../ServiceActions';

const service = { name: 'Prashant', title: 'Hello dental-clinic', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'dental-clinic!'", slug: 'hello-dental-clinic', _id: 1 };

test('should return the correct type for addService', actionTest(
  addService,
  service,
  { type: ADD_SERVICE, service },
));

test('should return the correct type for deleteService', actionTest(
  deleteService,
  service.cuid,
  { type: DELETE_SERVICE, cuid: service.cuid },
));

test('should return the correct type for addServices', actionTest(
  addServices,
  [service],
  { type: ADD_SERVICES, services: [service] },
));
