'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStringSearchFieldButtonStringSearchFieldReactJs = require('../ButtonStringSearchField/ButtonStringSearchField.react.js');

var _ButtonStringSearchFieldButtonStringSearchFieldReactJs2 = _interopRequireDefault(_ButtonStringSearchFieldButtonStringSearchFieldReactJs);

var KEYCODES = {
  ENTER_KEY_CODE: 13
};
// Import styling
//import './SearchField.scss';

/**
 * Main component for showing searchstring as buttons
 */
var SearchField = _react2['default'].createClass({
  displayName: 'SearchField',

  getInitialState: function getInitialState() {
    return {
      query: this.props.query,
      value: '',
      hasFocus: false
    };
  },
  render: function render() {
    var _state = this.state;
    var hasFocus = _state.hasFocus;
    var value = _state.value;
    var query = _state.query;

    var buttons = !hasFocus && _react2['default'].createElement(_ButtonStringSearchFieldButtonStringSearchFieldReactJs2['default'], { query: query }) || null;
    return _react2['default'].createElement(
      'div',
      null,
      buttons,
      _react2['default'].createElement(
        'form',
        { onSubmit: this.onSubmit },
        _react2['default'].createElement('input', { id: 'searchfield', onChange: this._onKeyDown, onFocus: this.setFocus.bind(this, true), onBlur: this.setFocus.bind(this, false) })
      )
    );
  },

  onSubmit: function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.focus();
    var text = this.state.text;
    console.log(text);
    var element = {
      index: text,
      query: text,
      text: text
    };
    this.state.query.push(element);
  },
  setFocus: function setFocus(state, event) {
    this.setState({ hasFocus: state });
  },
  _onKeyDown: function _onKeyDown(event) {
    this.setState({ text: event.target.value });
    if (event.keyCode === KEYCODES.ENTER_KEY_CODE) {
      event.target.blur();
      console.log(event.target);
      this.props.submit && this.props.submit(this.state.text);
    }
  },
  _onChange: function _onChange(event, value) {
    this.setState({ text: event.target.value });
    this.props.change && this.props.change(event.target.value);
  }

});

var SearchInput = _react2['default'].createClass({
  displayName: 'SearchInput',

  render: function render() {}
});

exports['default'] = SearchField;
module.exports = exports['default'];