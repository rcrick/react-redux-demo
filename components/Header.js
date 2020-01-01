import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from './react-redux';

export default class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      themeColor: ''
    };
  }

  render() {
    return <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>;
  }
}

