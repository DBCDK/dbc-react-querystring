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
    const {hasFocus, value, query, text} = this.state;
    const buttons = !hasFocus && (<ButtonStringSearchField query={query}/>) || null;
    return (
      <div>{buttons}<form onSubmit={this.onSubmit}><input ref="input" id='searchfield' onChange={this._onKeyDown} onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)} value={text}/></form></div>
    );
  },

  onSubmit(event){
    event.preventDefault();
    //this.refs.input.getDOMNode().blur();

    let text = this.state.text;
    let element = {
      index: text,
      query: text,
      text: text
    }
    let query = this.state.query.push(element);
    this.setState({
      query: this.state.query,
      text: '',
      hasFocus: false
    })

  },
  getQueryTexts() {
    return this.state.query.map((element) => element.text).join(' ');
  },
  setFocus(state, event){
    this.setState({hasFocus: state,text: this.getQueryTexts()});
  },
  onBlur() {
    this.
  },
  _onKeyDown(event) {
    this.setState({text: event.target.value, hasFocus: true});
  },
  _onChange: function(event, value) {
    this.setState({text: event.target.value});
    this.props.change && this.props.change(event.target.value)
  }

});


const SearchInput = React.createClass({
  render(){}
});

export default SearchField;