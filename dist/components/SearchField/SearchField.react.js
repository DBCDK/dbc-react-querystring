'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _TokenListTokenListReactJs = require('../TokenList/TokenList.react.js');

var _TokenListTokenListReactJs2 = _interopRequireDefault(_TokenListTokenListReactJs);

/**
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 */
var SearchField = _react2['default'].createClass({
  displayName: 'SearchField',

  getInitialState: function getInitialState() {
    return {
      query: this.props.query || [],
      value: '',
      hasFocus: false
    };
  },
  render: function render() {
    var _state = this.state;
    var hasFocus = _state.hasFocus;
    var query = _state.query;
    var text = _state.text;

    var buttons = !hasFocus && _react2['default'].createElement(_TokenListTokenListReactJs2['default'], { query: query, remove: this._removeElement }) || null;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'form',
        { onSubmit: this._onSubmit },
        _react2['default'].createElement(
          'ul',
          { className: 'searchfield-wrapper' },
          _react2['default'].createElement(
            'li',
            { className: 'tokens' },
            _react2['default'].createElement(
              'div',
              { className: 'tokens-wrapper' },
              buttons
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'inputfield' },
            _react2['default'].createElement('input', { type: 'text',
              className: 'searchfield',
              onChange: this._onKeyDown,
              onFocus: this._setFocus.bind(this, true),
              onBlur: this._setFocus.bind(this, false),
              onClick: this._setFocus.bind(this, true),
              value: text
            })
          ),
          _react2['default'].createElement(
            'li',
            { className: 'submit' },
            _react2['default'].createElement('input', { className: 'button small', type: 'submit', value: 'søg' })
          )
        )
      )
    );
  },

  _removeElement: function _removeElement(text) {
    var query = _lodash2['default'].remove(this.state.query, function (element) {
      return element !== text;
    });
    this.setState({
      query: query
    });
  },

  _onSubmit: function _onSubmit(event) {
    event.preventDefault();
    var query = this.state.text && this.state.text.trim().split(' ') || this.state.query;
    this.setState({
      query: query,
      text: '',
      hasFocus: false
    });
  },
  _getQueryTexts: function _getQueryTexts() {
    return this.state.query.join(' ');
  },
  _setFocus: function _setFocus(state) {
    var text = state && this._getQueryTexts() || '';
    this.setState({ hasFocus: state, text: text });
  },
  _onKeyDown: function _onKeyDown(event) {
    var text = event.target.value;
    if (!this.state.hasFocus) {
      text = this._getQueryTexts() + ' ' + text;
    }
    this.setState({ text: text, hasFocus: true });
  },
  _onChange: function _onChange(event) {
    this.setState({ text: event.target.value });
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  }
});

exports['default'] = SearchField;
module.exports = exports['default'];