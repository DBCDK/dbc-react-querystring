'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ButtonStringReactJs = require('./ButtonString.react.js');

var _ButtonStringReactJs2 = _interopRequireDefault(_ButtonStringReactJs);

require('./ButtonStrongSearchField.scss');

/**
 * Get a random color. This function is used for development only. Should be exchanged with a colorscheme
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
 * Main component for showing searchstring as buttons
 */
var ButtonStringSearchField = _react2['default'].createClass({
    displayName: 'ButtonStringSearchField',

    /**
     * Remove query element with index
     *
     * @param index
     */
    remove: function remove(index) {
        console.log(this.state.query, 'index');
        var queries = _lodash2['default'].remove(this.state.query, function (query) {
            return query.index != index;
        });
        console.log(queries);
        this.setState({ query: queries });
    },

    getInitialState: function getInitialState() {
        var queries = this.props.query.map(function (query) {
            query.color = _getRandomColor();
            return query;
        });
        return {
            query: queries
        };
    },

    render: function render() {
        var _this = this;

        var buttonElements = this.state.query.map(function (query, index) {
            return _react2['default'].createElement(_ButtonStringReactJs2['default'], {
                key: query.index,
                index: query.index,
                remove: _this.remove,
                text: query.text,
                query: query.query,
                color: query.color
            });
        });
        return _react2['default'].createElement(
            'div',
            { className: 'buttonfield' },
            _react2['default'].createElement('img', null),
            buttonElements
        );
    }
});

exports['default'] = ButtonStringSearchField;
module.exports = exports['default'];