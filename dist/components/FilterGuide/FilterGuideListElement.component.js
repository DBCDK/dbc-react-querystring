'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    var _props = this.props;
    var select = _props.select;
    var element = _props.element;

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

exports['default'] = FilterGuideListElement;
module.exports = exports['default'];