import React from 'react';
import { connect } from 'react-redux';

import HomeBanner from './components/HomeBanner/HomeBanner';
import AboutUs from './components/AboutUs/AboutUs';
import CMSPages from './components/CMSPages/CMSPages';
import { fetchCMSPages } from '../CMSPage/CMSPageActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCMSPages());
  }

  render() {
    return (
      <div className="HomePage">
        <HomeBanner />
        <AboutUs />
        <CMSPages cmsPages={this.props.cmsPages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cmsPages: state.cmsPages.data,
});

export default connect(mapStateToProps)(HomePage);
