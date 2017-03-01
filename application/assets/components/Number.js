'use strick';

import React, { Component, PropTypes } from 'react';

const TYPES = {
  count: PropTypes.number
};

export default class Number extends Component {
  render() {
    const { count } = this.props;
    return (
      <span>{count}</span>
    );
  }
}

Number.propTypes = TYPES;
