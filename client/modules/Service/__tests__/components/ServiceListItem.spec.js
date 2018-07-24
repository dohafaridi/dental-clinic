import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import ServiceListItem from '../../components/ServiceListItem/ServiceListItem';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const service = { name: 'Prashant', title: 'Hello dental-clinic', slug: 'hello-dental-clinic', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'dental-clinic!'" };
const props = {
  service,
  onDelete: () => {},
};

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <ServiceListItem {...props} />
  );

  t.deepEqual(wrapper.prop('service'), props.service);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onDelete'), props.onDelete);
});

test('calls onDelete', t => {
  const onDelete = sinon.spy();
  const wrapper = shallowWithIntl(
    <ServiceListItem service={service} onDelete={onDelete} />
  );

  wrapper.find('.ServiceListItem__ServiceListItem__links--item').first().simulate('click');
  t.truthy(onDelete.calledOnce);
});
