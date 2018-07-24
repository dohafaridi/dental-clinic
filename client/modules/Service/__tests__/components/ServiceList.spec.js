import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import ServiceList from '../../components/ServiceList';

const services = [
  { name: 'Prashant', title: 'Hello dental-clinic', slug: 'hello-dental-clinic', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'dental-clinic!'" },
  { name: 'Mayank', title: 'Hi dental-clinic', slug: 'hi-dental-clinic', cuid: 'f34gb2bh24b24b3', content: "All dogs bark 'dental-clinic!'" },
];

test('renders the list', t => {
  const wrapper = shallow(
    <ServiceList services={services} handleShowService={() => {}} handleDeleteService={() => {}} />
  );

  t.is(wrapper.find('ServiceListItem').length, 2);
});
