'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// Import styling

require('./ButtonStrongSearchField.scss');

function _getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Main component for showing searchstring as buttons
 */
var ButtonStringSearchField = _react2['default'].createClass({
    displayName: 'ButtonStringSearchField',

    render: function render() {
        var buttonElements = this.props.query.map(function (query) {
            return _react2['default'].createElement(ButtonString, { text: query.text, query: query.query, color: _getRandomColor() });
        });
        return _react2['default'].createElement(
            'div',
            { className: 'buttonfield' },
            buttonElements
        );
    }
});

/**
 * Component for creating buttons
 */
var ButtonString = _react2['default'].createClass({
    displayName: 'ButtonString',

    render: function render() {
        var _props = this.props;
        var color = _props.color;
        var text = _props.text;

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
                { className: 'remove' },
                'x'
            )
        );
    }
});

exports['default'] = ButtonStringSearchField;
module.exports = exports['default'];