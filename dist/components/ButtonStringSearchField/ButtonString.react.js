'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Component for creating buttons
 */
var ButtonString = _react2['default'].createClass({
    displayName: 'ButtonString',

    render: function render() {
        console.log(this.props.index);
        var _props = this.props;
        var color = _props.color;
        var text = _props.text;
        var remove = _props.remove;
        var index = _props.index;

        var classes = new Array('buttonstring');
        var style = {
            backgroundColor: color
        };
        return _react2['default'].createElement(
            'div',
            { className: classes.join(' '), style: style },
            _react2['default'].createElement(
                'span',
                { className: 'text' },
                text
            ),
            _react2['default'].createElement(
                'span',
                { className: 'remove', onClick: remove.bind(null, index) },
                'x'
            )
        );
    }
});

exports['default'] = ButtonString;
module.exports = exports['default'];