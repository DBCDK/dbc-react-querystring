'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Create a List of words for filtering the searchresult
 *
 */
var FilterGuide = _react2['default'].createClass({
  displayName: 'FilterGuide',

  propTypes: {
    elements: _react2['default'].PropTypes.array.isRequired,
    select: _react2['default'].PropTypes.func.isRequired
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'filterguide-wrapper' },
      _react2['default'].createElement(
        'div',
        { className: 'filterguide' },
        _react2['default'].createElement(FilterGuideList, this.props)
      )
    );
  }
});

exports.FilterGuide = FilterGuide;
/**
 * Render an array of words as a scrollable list
 */
var FilterGuideList = _react2['default'].createClass({
  displayName: 'FilterGuideList',

  propTypes: {
    elements: _react2['default'].PropTypes.array.isRequired,
    select: _react2['default'].PropTypes.func.isRequired
  },
  render: function render() {
    var _props = this.props;
    var select = _props.select;
    var elements = _props.elements;

    var listItems = elements.map(function (element, i) {
      return _react2['default'].createElement(FilterGuideListElement, { select: select, key: i, element: element });
    });
    return _react2['default'].createElement(
      'ul',
      { className: 'filterguide-list' },
      listItems
    );
  }
});

exports.FilterGuideList = FilterGuideList;
/**
 * Render an element for a Filterguide list
 *
 */
var FilterGuideListElement = _react2['default'].createClass({
  displayName: 'FilterGuideListElement',

  propTypes: {
    element: _react2['default'].PropTypes.object.isRequired,
    select: _react2['default'].PropTypes.func.isRequired
  },
  render: function render() {
    var _props2 = this.props;
    var select = _props2.select;
    var element = _props2.element;

    return _react2['default'].createElement(
      'li',
      { className: 'filterguide-list-element' },
      _react2['default'].createElement(
        'a',
        { onClick: select.bind(null, this.props.element), href: '#', className: 'element-label' },
        element.value
      )
    );
  }
});

exports.FilterGuideListElement = FilterGuideListElement;
exports['default'] = FilterGuide;