"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var SearchField = _react2["default"].createClass({
    displayName: "SearchField",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement(ButtonString, { color: "blue", string: "test" })
        );
    }
});

var ButtonString = _react2["default"].createClass({
    displayName: "ButtonString",

    render: function render() {
        var _props = this.props;
        var color = _props.color;
        var string = _props.string;

        var classes = new Array("buttonstring", color);
        return _react2["default"].createElement(
            "div",
            { className: classes },
            _react2["default"].createElement(
                "span",
                { className: "string" },
                string
            ),
            _react2["default"].createElement(
                "span",
                { className: "buttonstring-close" },
                "x"
            )
        );
    }
});

exports["default"] = SearchField;
module.exports = exports["default"];