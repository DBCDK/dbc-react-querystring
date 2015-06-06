'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TokenReact = require('./Token.react');

var _TokenReact2 = _interopRequireDefault(_TokenReact);

/**
 * Get a random color. This function is used for development only.
 * Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */
function _getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Creates a list of tokens
 *
 * Properties:
 * query: array of strings
 * remove: callback function for removing elements with a certain index
 *
 */
exports['default'] = _react2['default'].createClass({
  displayName: 'TokenList.react',

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
    var query = _props.query;
    var remove = _props.remove;

    // The order of tokens is reversed to handle that last token should be visible.
    // In the CSS direction is set to rlt, reversing the order again
    var tokens = query.map(function (element) {

      return _react2['default'].createElement(_TokenReact2['default'], {
        key: element,
        index: element,
        remove: remove.bind(null, element),
        text: element,
        color: _getRandomColor()
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