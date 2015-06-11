'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Token component displayed as a removable button in an inputfield
 *
 * Properties:
 * color: the color of the token, supports any kind of CSS color
 * text: the string to be displayed on the button
 * remove: callback function for removing an element
 * index: index of the element
 */
exports['default'] = _react2['default'].createClass({
  displayName: 'Token.component',

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var text = _props.text;
    var remove = _props.remove;
    var index = _props.index;

    // Background color is dynamic and therefore set inline
    var style = {
      backgroundColor: color
    };

    return _react2['default'].createElement(
      'div',
      { className: 'token', style: style },
      _react2['default'].createElement(
        'span',
        { className: 'text' },
        text
      ),
      _react2['default'].createElement(
        'span',
        { className: 'remove', onClick: remove },
        'x'
      )
    );
  }
});
module.exports = exports['default'];