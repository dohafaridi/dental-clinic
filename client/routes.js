/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/AboutUs/AboutUs');
  require('./modules/Service/pages/ServiceListPage/ServiceListPage');
  require('./modules/Service/pages/ServiceDetailPage/ServiceDetailPage');
  require('./modules/Testimonial/pages/TestimonialListPage/TestimonialListPage');
  require('./modules/Testimonial/pages/TestimonialDetailPage/TestimonialDetailPage');
  require('./modules/Patient/pages/PatientListPage/PatientListPage');
  require('./modules/patient/pages/PatientDetailPage/PatientDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/AboutUs/AboutUs').default);
        });
      }}
    />
    <Route
      path="/services"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Service/pages/ServiceListPage/ServiceListPage')
              .default
          );
        });
      }}
    />
    <Route
      path="/services/:slug"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Service/pages/ServiceDetailPage/ServiceDetailPage')
              .default
          );
        });
      }}
    />
    <Route
      path="/testimonials"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Testimonial/pages/TestimonialListPage/TestimonialListPage')
              .default
          );
        });
      }}
    />
    <Route
      path="/testimonials/:slug"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Testimonial/pages/TestimonialDetailPage/TestimonialDetailPage')
              .default
          );
        });
      }}
    />
    <Route
      path="/patients"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Patient/pages/PatientListPage/PatientListPage')
              .default
          );
        });
      }}
    />
    <Route
      path="/patients/:slug"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require('./modules/Patient/pages/PatientDetailPage/PatientDetailPage')
              .default
          );
        });
      }}
    />
  </Route>
);
