import test from 'ava';
import { reducerTest } from 'redux-ava';
import serviceReducer, { getService, getServices } from '../ServiceReducer';
import { addService, deleteService, addServices } from '../ServiceActions';

test('action for ADD_SERVICE is working', reducerTest(
  serviceReducer,
  { data: ['foo'] },
  addService({
    name: 'prank',
    title: 'first service',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-service',
  }),
  { data: [{
    name: 'prank',
    title: 'first service',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-service',
  }, 'foo'] },
));

test('action for DELETE_SERVICE is working', reducerTest(
  serviceReducer,
  { data: [{
    name: 'prank',
    title: 'first service',
    content: 'Hello world!',
    cuid: 'abc',
    _id: 1,
    slug: 'first-service',
  }] },
  deleteService('abc'),
  { data: [] },
));

test('action for ADD_SERVICES is working', reducerTest(
  serviceReducer,
  { data: [] },
  addServices([
    {
      name: 'prank',
      title: 'first service',
      content: 'Hello world!',
      _id: null,
      cuid: null,
      slug: 'first-service',
    },
  ]),
  { data: [{
    name: 'prank',
    title: 'first service',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-service',
  }] },
));

test('getServices selector', t => {
  t.deepEqual(
    getServices({
      services: { data: ['foo'] },
    }),
    ['foo']
  );
});

test('getService selector', t => {
  t.deepEqual(
    getService({
      services: { data: [{ cuid: '123' }] },
    }, '123'),
    { cuid: '123' }
  );
});

