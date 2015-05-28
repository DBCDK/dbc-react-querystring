"use strict";
import React from 'react';
import ButtonStringSearchField from '../ButtonStringSearchField/ButtonStringSearchField.react.js';
const KEYCODES = {
  ENTER_KEY_CODE: 13
};
// Import styling
import './SearchField.scss';

/**
 * Main component for showing searchstring as buttons
 */
const SearchField = React.createClass({
  getInitialState() {
    return {
      query: this.props.query || [],
      value: '',
      hasFocus: false
    }
  },
  render() {
    const {hasFocus, value, query, text} = this.state;
    const buttons = !hasFocus && (<ButtonStringSearchField query={query} remove={this.removeElement}/>) || null;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ul className='searchfield-wrapper'>
            <li className='tokens'>{buttons}</li>
            <li className='inputfield'>
              <input type='text' className='searchfield'
                     onChange={this._onKeyDown}
                     onFocus={this.setFocus.bind(this, true)}
                     onBlur={this.setFocus.bind(this, false)}
                     value={text}
                />
            </li>
            <li className='submit'><input className='button small' type='submit' value='søg'/></li>
          </ul>
        </form>
      </div>
    );
  },

  removeElement(text) {
    let query = _.remove(this.state.query, (element)=> element !== text);
    this.setState({
      query: query
    });
  },
  onSubmit(event) {
    event.preventDefault();

    let text = this.state.text;
    this.setState({
      query: text.split(' '),
      text: '',
      hasFocus: false
    })
  },
  getQueryTexts() {
    return this.state.query.join(' ');
  },
  setFocus(state, event) {
    let text = state && this.getQueryTexts() || '';
    this.setState({hasFocus: state, text: text});
  },
  _onKeyDown(event) {
    let text = event.target.value;
    if (!this.state.hasFocus) {
      text = this.getQueryTexts() + ' ' + text;
    }
    this.setState({text: text, hasFocus: true});
  },
  _onChange: function (event, value) {
    this.setState({text: event.target.value});
    this.props.change && this.props.change(event.target.value)
  }
});

export default SearchField;