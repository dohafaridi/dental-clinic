import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import TestimonialList from '../../components/TestimonialList';
import TestimonialWidget from '../../components/TestimonialWidget/TestimonialWidget';
import {
  addTestimonialRequest,
  fetchTestimonials,
  editTestimonialRequest,
  deleteTestimonialRequest,
} from '../../TestimonialActions';
import { toggleShowTestimonialWidget } from '../../../App/AppActions';
import { setDefaultTestimonialWidgetValues } from '../../components/TestimonialWidget/TestimonialWidgetActions';

class TestimonialListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTestimonials());

    this.handleTestimonialWidgetSubmit = this.handleTestimonialWidgetSubmit.bind(this);
    this.toggleShowTestimonialWidgetSection = this.toggleShowTestimonialWidgetSection.bind(this);
    this.handleAddTestimonial = this.handleAddTestimonial.bind(this);
    this.handleDeleteTestimonial = this.handleDeleteTestimonial.bind(this);
    this.handleEditTestimonial = this.handleEditTestimonial.bind(this);
  }

  handleTestimonialWidgetSubmit(title, content) {
    this.props.widgetValues.testimonialWidgetTitleIntId === 'editTheTestimonial' // eslint-disable-line
      ? this.handleEditTestimonial(title, content, this.props.widgetValues.cuid)
      : this.handleAddTestimonial(title, content);
  }

  handleAddTestimonial(title, content) {
    this.props.dispatch(toggleShowTestimonialWidget());
    this.props.dispatch(addTestimonialRequest({ title, content }));
  }

  handleEditTestimonial(title, content, cuid) {
    this.props.dispatch(toggleShowTestimonialWidget());
    this.props.dispatch(editTestimonialRequest(title, content, cuid));
  }

  toggleShowTestimonialWidgetSection(testimonial) {
    this.props.dispatch(toggleShowTestimonialWidget());
    this.props.dispatch(
      setDefaultTestimonialWidgetValues({
        testimonialWidgetTitleIntId: 'editTheTestimonial',
        titleInputValue: testimonial.title,
        contentTextareaValue: testimonial.content,
        cuid: testimonial.cuid,
      })
    );
  }

  handleDeleteTestimonial(cuid) {
    if (confirm('Do you want to delete this testimonial')) { // eslint-disable-line
      this.props.dispatch(deleteTestimonialRequest(cuid));
    }
  }

  render() {
    const componentContent = (
      <div className="TestimonialListPage">
        <TestimonialWidget
          manageTestimonial={this.handleTestimonialWidgetSubmit}
          showTestimonialWidget={this.props.showTestimonialWidget}
        />
        <TestimonialList
          handleDeleteTestimonial={this.handleDeleteTestimonial}
          handleEditTestimonial={this.toggleShowTestimonialWidgetSection}
          testimonials={this.props.testimonials}
        />
      </div>
    );
    const emptyCollectionMessage = (
      <FormattedMessage
        id="emptyCollectionMessage"
        values={{ collection: 'testimonial' }}
      />
    );

    return this.props.testimonials.length || this.props.showTestimonialWidget
      ? componentContent
      : emptyCollectionMessage;
  }
}

// Actions required to provide data for TestimonialListPage to render in sever side.
TestimonialListPage.need = [
  () => {
    return fetchTestimonials();
  },
];

const mapStateToProps = state => ({
  widgetValues: state.testimonialsWidget.defaultValues,
  showTestimonialWidget: state.app.showTestimonialWidget,
  testimonials: state.testimonials.data,
});

TestimonialListPage.propTypes = {
  testimonials: PropTypes.array,
  showTestimonialWidget: PropTypes.bool.isRequired,
  widgetValues: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TestimonialListPage);
