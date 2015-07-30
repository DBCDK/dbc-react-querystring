'use strict';

/**
 * @file
 * Creates a list of tokens
 *
 * This component is only used internally for the TokenSearchField
 *
 * Properties:
 * query: array of strings
 * remove: callback function for removing elements with a certain index
 *
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TokenComponentJs = require('./Token.component.js');

/**
 * Get a random color. This function is used for development only.
 * Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */

var _TokenComponentJs2 = _interopRequireDefault(_TokenComponentJs);

function _getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Return a color depending on the type
 *
 * @param type
 * @returns {*}
 */
function getColor(type) {
  switch (type) {
    case 'text':
      return '#222';
    default:
      return '#61b6d9';
  }
}

exports['default'] = _react2['default'].createClass({
  displayName: 'TokenList.component',

  propTypes: {
    query: _react.PropTypes.array.isRequired,
    remove: _react.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    var queries = this.props.query.map(function (query) {
      return {
        text: query,
        color: _getRandomColor()
      };
    });
    return {
      query: queries
    };
  },

  render: function render() {
    var _props = this.props;

    // The order of tokens is reversed to handle that last token should be visible.
    // In the CSS direction is set to rlt, reversing the order again
    var query = _props.query;
    var remove = _props.remove;
    var tokens = query.map(function (element) {

      return _react2['default'].createElement(_TokenComponentJs2['default'], {
        key: element.index,
        index: element.index,
        remove: remove.bind(null, element),
        text: element.value,
        color: getColor(element.type)
      });
    }).reverse();

    return _react2['default'].createElement(
      'div',
      { className: 'tokenlist' },
      tokens
    );
  }
});
module.exports = exports['default'];