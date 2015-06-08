'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * Create a List of words for filtering the searchresult
 */
var FilterGuide = _react2['default'].createClass({
  displayName: 'FilterGuide',

  propTypes: {
    elements: _react2['default'].proptypes.array.isRequired
  },
  render: function render() {
    var elements = this.props.elements;

    return _react2['default'].createElement(
      'div',
      { className: 'filterguide' },
      _react2['default'].createElement(FilterGuideList, { elements: elements })
    );
  }
});

/**
 * Render an array of words as a scrollable list
 */
var FilterGuideList = _react2['default'].createClass({
  displayName: 'FilterGuideList',

  propTypes: {
    elements: _react2['default'].proptypes.array.isRequired
  },
  render: function render() {
    var elements = this.props.elements;

    var listItems = elements.map(function (element) {
      return _react2['default'].createElement(FilterGuideListElement, { element: element });
    });
    return _react2['default'].createElement(
      'div',
      { className: 'filterguide-list' },
      listItems
    );
  }
});

var FilterGuideListElement = _react2['default'].createClass({
  displayName: 'FilterGuideListElement',

  render: function render() {
    var element = this.props.element;

    return _react2['default'].createElement(
      'div',
      { className: 'filterguide-list-element' },
      element
    );
  }
});

exports['default'] = FilterGuide;
module.exports = exports['default'];