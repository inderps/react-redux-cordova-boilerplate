import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DummyActions from '../actions/DummyActions';
import DummyComponent from '../components/DummyComponent/DummyComponent';
import './AppContainer.scss';

class AppContainer extends Component {
  render() {
    const { dummy, dummyActions } = this.props;
    return (<div>
      <DummyComponent dummy={dummy} dummyActions={dummyActions}/>
    </div>);
  }
}

function mapState(state) {
  return {
    dummy: state.dummy.toJS(),
  };
}

function mapDispatch(dispatch) {
  return {
    dummyActions: bindActionCreators(DummyActions, dispatch),
  };
}

AppContainer.propTypes = {
  dummyActions: PropTypes.object,
  dummy: PropTypes.object,
};

export default connect(mapState, mapDispatch)(AppContainer);
