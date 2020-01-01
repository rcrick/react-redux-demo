import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from './react-redux';

export default class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      themeColor: ''
    };
  }

  handleCSwitchColor(color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  }
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleCSwitchColor.bind(this, 'red')}
        >
          Red
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleCSwitchColor.bind(this, 'blue')}
        >
          Blue
        </button>
      </div>
    );
  }
}

