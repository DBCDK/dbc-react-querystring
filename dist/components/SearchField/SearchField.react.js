'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _TokenListTokenListReact = require('../TokenList/TokenList.react');

var _TokenListTokenListReact2 = _interopRequireDefault(_TokenListTokenListReact);

var _utilsQueryStringUtil = require('../../utils/QueryString.util');

/**
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 * change optional callback function for when the input field is updated
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
    var text = _state.text;
    var query = this.props.query;

    var buttons = !hasFocus && _react2['default'].createElement(_TokenListTokenListReact2['default'], { query: query, remove: this._removeElement }) || null;
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

  _removeElement: function _removeElement(element) {
    var query = _lodash2['default'].remove(this.props.query, function (queryObject) {
      return queryObject !== element;
    });
    this.props.update(query);
  },

  // Handle changes in the input field
  _onSubmit: function _onSubmit(event) {
    // make sure form is not submitted, it is handled with js
    // @todo implement fallback for when js is failing
    event.preventDefault();
    // update query with the updated text string
    var text = this.state.text && this.state.text.trim() || '';
    var query = (0, _utilsQueryStringUtil.updateQueryFromString)(text, this.props.query);
    // let query = this.state.text && this.state.text.trim().split(' ') || this.props.query;
    // Send updated query to parent component
    this.props.update(query);
    // Update local state: remove focus and empty textfield
    this.setState({
      text: '',
      hasFocus: false
    });
  },
  _getQueryTexts: function _getQueryTexts() {
    return this.props.query.map(function (element) {
      return element.value;
    }).join(' ');
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