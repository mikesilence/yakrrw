'use strick';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as updateCount from '../actions';
import Number from '../components/Number';

const TYPES = {
  actions: PropTypes.object,
  count: PropTypes.number
};

class Application extends Component {
  handler() {
    this.props.actions.updateCount(this.props.count + 1);
  }

  render() {
    const { count } = this.props;
    const style = { display: 'inline-block', border: '1px solid green'};
    return (
      <div>
        <h1 onClick={this.handler.bind(this)} style={style}>Кликни и измени цифру
          <Number count={count}/>
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateCount, dispatch)
  };
}

Application.propTypes = TYPES;

export default connect(mapStateToProps, mapDispatchToProps)(Application);
