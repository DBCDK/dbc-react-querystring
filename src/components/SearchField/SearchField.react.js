"use strict";
import React from 'react';
import TokenList from '../TokenList/TokenList.react.js';

// Import styling
import './SearchField.scss';

/**
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
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
    const buttons = !hasFocus && (<TokenList query={query} remove={this._removeElement}/>) || null;
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <ul className='searchfield-wrapper'>
            <li className='tokens'>
              <div className='tokens-wrapper'>{buttons}</div>
            </li>
            <li className='inputfield'>
              <input type='text'
                     className='searchfield'
                     onChange={this._onKeyDown}
                     onFocus={this._setFocus.bind(this, true)}
                     onBlur={this._setFocus.bind(this, false)}
                     onClick={this._setFocus.bind(this, true)}
                     value={text}
                />
            </li>
            <li className='submit'>
              <input className='button small' type='submit' value='søg'/>
            </li>
          </ul>
        </form>
      </div>
    );
  },

  _removeElement(text) {
    let query = _.remove(this.state.query, (element)=> element !== text);
    this.setState({
      query: query
    });
  },

  _onSubmit(event) {
    event.preventDefault();
    let query = this.state.text && this.state.text.trim().split(' ') || this.state.query;
    this.setState({
      query: query,
      text: '',
      hasFocus: false
    })
  },
  _getQueryTexts() {
    return this.state.query.join(' ');
  },
  _setFocus(state, event) {
    let text = state && this._getQueryTexts() || '';
    this.setState({hasFocus: state, text: text});
  },
  _onKeyDown(event) {
    let text = event.target.value;
    if (!this.state.hasFocus) {
      text = this._getQueryTexts() + ' ' + text;
    }
    this.setState({text: text, hasFocus: true});
  },
  _onChange: function (event, value) {
    this.setState({text: event.target.value});
    this.props.change && this.props.change(event.target.value)
  }
});

export default SearchField;