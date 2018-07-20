import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { switchLanguage } from '../../modules/Intl/IntlActions';
import { toggleShowServiceWidget } from './AppActions';
import { setDefaultServiceWidgetValues } from '../../modules/Service/components/ServiceWidget/ServiceWidgetActions';

let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
    this.toggleShowServiceWidgetSection = this.toggleShowServiceWidgetSection.bind(
      this
    );
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  toggleShowServiceWidgetSection() {
    this.props.dispatch(toggleShowServiceWidget());
    this.props.dispatch(
      setDefaultServiceWidgetValues({
        serviceWidgetTitleIntId: 'createNewService',
        titleInputValue: '',
        contentTextareaValue: '',
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.isMounted &&
          !window.devToolsExtension &&
          process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Dental clinic"
            titleTemplate="%s - Dental clinic"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleShowServiceWidget={this.toggleShowServiceWidgetSection}
          />
          <div className="container">{this.props.children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
