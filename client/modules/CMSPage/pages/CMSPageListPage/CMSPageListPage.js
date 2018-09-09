import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import CMSPageList from '../../components/CMSPageList';
import CMSPageWidget from '../../components/CMSPageWidget/CMSPageWidget';
import {
  addCMSPageRequest,
  fetchCMSPages,
  editCMSPageRequest,
  deleteCMSPageRequest,
} from '../../CMSPageActions';
import { toggleShowCMSPageWidget } from '../../../App/AppActions';
import { setDefaultCMSPageWidgetValues } from '../../components/CMSPageWidget/CMSPageWidgetActions';

class CMSPageListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCMSPages());

    this.handleCMSPageWidgetSubmit = this.handleCMSPageWidgetSubmit.bind(this);
    this.toggleShowCMSPageWidgetSection = this.toggleShowCMSPageWidgetSection.bind(this);
    this.handleAddCMSPage = this.handleAddCMSPage.bind(this);
    this.handleDeleteCMSPage = this.handleDeleteCMSPage.bind(this);
    this.handleEditCMSPage = this.handleEditCMSPage.bind(this);
  }

  handleCMSPageWidgetSubmit(title, content) {
    this.props.widgetValues.cmsPageWidgetTitleIntId === 'editTheCMSPage' // eslint-disable-line
      ? this.handleEditCMSPage(title, content, this.props.widgetValues.cuid)
      : this.handleAddCMSPage(title, content);
  }

  handleAddCMSPage(title, content) {
    this.props.dispatch(toggleShowCMSPageWidget());
    this.props.dispatch(addCMSPageRequest({ title, content }));
  }

  handleEditCMSPage(title, content, cuid) {
    this.props.dispatch(toggleShowCMSPageWidget());
    this.props.dispatch(editCMSPageRequest(title, content, cuid));
  }

  toggleShowCMSPageWidgetSection(cmsPage) {
    this.props.dispatch(toggleShowCMSPageWidget());
    this.props.dispatch(
      setDefaultCMSPageWidgetValues({
        cmsPageWidgetTitleIntId: 'editTheCMSPage',
        titleInputValue: cmsPage.title,
        contentTextareaValue: cmsPage.content,
        cuid: cmsPage.cuid,
      })
    );
  }

  handleDeleteCMSPage(cuid) {
    if (confirm('Do you want to delete this cmsPage')) { // eslint-disable-line
      this.props.dispatch(deleteCMSPageRequest(cuid));
    }
  }

  render() {
    const componentContent = (
      <div className="CMSPageListPage">
        <CMSPageWidget
          manageCMSPage={this.handleCMSPageWidgetSubmit}
          showCMSPageWidget={this.props.showCMSPageWidget}
        />
        <CMSPageList
          handleDeleteCMSPage={this.handleDeleteCMSPage}
          handleEditCMSPage={this.toggleShowCMSPageWidgetSection}
          cmsPages={this.props.cmsPages}
          isAdmin={this.props.userStatus.isAdmin}
        />
      </div>
    );
    const emptyCollectionMessage = (
      <div className={"emptyMessage"}>
        <FormattedMessage
          id="emptyCollectionMessage"
          values={{ collection: 'cmsPages' }}
        />
      </div>
    );

    return this.props.cmsPages.length || this.props.showCMSPageWidget
      ? componentContent
      : emptyCollectionMessage;
  }
}

// Actions required to provide data for CMSPageListPage to render in sever side.
CMSPageListPage.need = [
  () => {
    return fetchCMSPages();
  },
];

const mapStateToProps = state => ({
  widgetValues: state.cmsPagesWidget.defaultValues,
  showCMSPageWidget: state.app.showCMSPageWidget,
  cmsPages: state.cmsPages.data,
});

CMSPageListPage.propTypes = {
  cmsPages: PropTypes.array,
  showCMSPageWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CMSPageListPage);
