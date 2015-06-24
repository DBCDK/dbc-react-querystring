'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _TokenListTokenListComponentJs = require('../TokenList/TokenList.component.js');

var _TokenListTokenListComponentJs2 = _interopRequireDefault(_TokenListTokenListComponentJs);

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

  propTypes: {
    query: _react.PropTypes.array.isRequired,
    update: _react.PropTypes.func.isRequired,
    change: _react.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      value: '',
      hasFocus: false
    };
  },

  removeElement: function removeElement(element) {
    var query = _lodash2['default'].remove(this.props.query, function (queryObject) {
      return queryObject !== element;
    });
    this.props.update(query);
  },

  onSubmit: function onSubmit(event) {
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

  getQueryTexts: function getQueryTexts() {
    return this.props.query.map(function (element) {
      return element.value;
    }).join(' ');
  },

  setFocus: function setFocus(state) {
    var text = state && this.getQueryTexts() || '';
    this.setState({ hasFocus: state, text: text });
    //this.props.update(this.props.query);
  },

  onChange: function onChange(event) {
    var text = event.target.value;
    if (!this.state.hasFocus) {
      text = this.getQueryTexts() + ' ' + text;
    }
    this.setState({ text: text, hasFocus: true });
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  },

  render: function render() {
    var _state = this.state;
    var hasFocus = _state.hasFocus;
    var text = _state.text;
    var query = this.props.query;

    var tokenClasses = !hasFocus && 'tokens-wrapper' || 'tokens-wrapper hide';
    return _react2['default'].createElement(
      'div',
      { className: 'token-searchfield' },
      _react2['default'].createElement(
        'form',
        { onSubmit: this.onSubmit },
        _react2['default'].createElement(
          'ul',
          { className: 'searchfield-wrapper' },
          _react2['default'].createElement(
            'li',
            { className: 'tokens' },
            _react2['default'].createElement(
              'div',
              { className: tokenClasses },
              _react2['default'].createElement(_TokenListTokenListComponentJs2['default'], { query: query, remove: this.removeElement })
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'inputfield' },
            _react2['default'].createElement('input', { type: 'text',
              className: 'searchfield',
              onChange: this.onChange,
              onFocus: this.setFocus.bind(this, true),
              onBlur: this.setFocus.bind(this, false),
              onClick: this.setFocus.bind(this, true),
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
  }
});

exports['default'] = SearchField;
module.exports = exports['default'];