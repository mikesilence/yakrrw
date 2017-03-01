'use strick';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as updateCount from '../actions';
import Number from '../components/Number';

const TYPES = {
  count: PropTypes.number,
  updateCount: PropTypes.object
};

class Application extends Component {
  handler() {
    this.props.updateCount.default(this.props.count + 1);
  }

  render() {
    console.log(this.props);
    const { count } = this.props;
    return (
      <div>
        <h1 onClick={this.handler.bind(this)}>Кликни и измени цифру
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
    updateCount: bindActionCreators(updateCount, dispatch)
  };
}

Application.propTypes = TYPES;

export default connect(mapStateToProps, mapDispatchToProps)(Application);
