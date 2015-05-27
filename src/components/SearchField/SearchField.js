"use strict";
import React from 'react';
import ButtonStringSearchField from '../ButtonStringSearchField/ButtonStringSearchField.react.js';
const KEYCODES = {
  ENTER_KEY_CODE : 13
};
// Import styling
//import './SearchField.scss';

/**
 * Main component for showing searchstring as buttons
 */
const SearchField = React.createClass({
  getInitialState() {
    return {
      query: this.props.query,
      value: '',
      hasFocus: false
    }
  },
  render() {
    const {hasFocus, value, query} = this.state;
    const buttons = !hasFocus && (<ButtonStringSearchField query={query}/>) || null;
    return (
      <div>{buttons}<form><input onChange={this._onKeyDown} onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)}/></form></div>
    );
  },
  setFocus(state, event){
    this.setState({hasFocus: state});
  },
  _onKeyDown(event) {
    if (event.keyCode === KEYCODES.ENTER_KEY_CODE) {
      this.props.submit && this.props.submit(this.state.text);
    }
  },
  _onChange: function(event, value) {
    this.setState({text: event.target.value});
    this.props.change && this.props.change(event.target.value)
  },

});


const SearchInput = React.createClass({
  render(){}
});

export default SearchField;