import React from 'react';
import { connect } from 'react-redux';

import HomeBanner from './components/HomeBanner/HomeBanner';
import AboutUs from './components/AboutUs/AboutUs';
import CMSPages from './components/CMSPages/CMSPages';
import { fetchCMSPages } from '../CMSPage/CMSPageActions';
import Testimonials from './components/Testimonials/Testimonials';
import { fetchHomeTestimonials } from '../Testimonial/TestimonialActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHomeTestimonials());
    this.props.dispatch(fetchCMSPages());
  }

  render() {
    return (
      <div className="HomePage">
        <HomeBanner />
        <AboutUs />
        <Testimonials testimonials={this.props.testimonials} />
        <CMSPages cmsPages={this.props.cmsPages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cmsPages: state.cmsPages.data,
  testimonials: state.testimonials.data,
});

export default connect(mapStateToProps)(HomePage);
