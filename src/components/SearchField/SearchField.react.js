'use strict';
import React from 'react';
import _ from 'lodash';
import TokenList from '../TokenList/TokenList.react';
import {updateQueryFromString} from '../../utils/QueryString.util';

/**
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 * change optional callback function for when the input field is updated
 */
const SearchField = React.createClass({
  getInitialState() {
    return {
      query: this.props.query || [],
      value: '',
      hasFocus: false
    };
  },
  render() {
    const {hasFocus, text} = this.state;
    const {query} = this.props;
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

  _removeElement(element) {
    let query = _.remove(this.props.query, (queryObject)=> queryObject !== element);
    this.props.update(query);
  },

  // Handle changes in the input field
  _onSubmit(event) {
    // make sure form is not submitted, it is handled with js
    // @todo implement fallback for when js is failing
    event.preventDefault();
    // update query with the updated text string
    let text = this.state.text && this.state.text.trim() || '';
    let query = updateQueryFromString(text, this.props.query);
    // let query = this.state.text && this.state.text.trim().split(' ') || this.props.query;
    // Send updated query to parent component
    this.props.update(query);
    // Update local state: remove focus and empty textfield
    this.setState({
      text: '',
      hasFocus: false
    });
  },
  _getQueryTexts() {
    return this.props.query.map((element)=> element.value).join(' ');
  },
  _setFocus(state) {
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
  _onChange: function (event) {
    this.setState({text: event.target.value});
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  }
});

export default SearchField;


