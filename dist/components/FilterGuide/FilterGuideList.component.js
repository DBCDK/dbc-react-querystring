'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterGuideListElementComponentJs = require('./FilterGuideListElement.component.js');

var _FilterGuideListElementComponentJs2 = _interopRequireDefault(_FilterGuideListElementComponentJs);

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
      return _react2['default'].createElement(_FilterGuideListElementComponentJs2['default'], { select: select, key: i, element: element });
    });
    return _react2['default'].createElement(
      'ul',
      { className: 'filterguide-list' },
      listItems
    );
  }
});

exports['default'] = FilterGuideList;
module.exports = exports['default'];