'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _FilterGuideReactJs = require('../FilterGuide.react.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

describe('Test the FilterGuide component', function () {
  it('displays a list of words', function () {
    var elements = [{ value: 'test', type: 'testType' }, { value: 'test2', type: 'testType2' }];
    var select = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    var props = {
      elements: elements,
      select: select
    };

    var element = _react2['default'].createElement(_FilterGuideReactJs.FilterGuide, props);
    var dom = _reactLibReactTestUtils2['default'].renderIntoDocument(element);
    var filterelements = _reactLibReactTestUtils2['default'].scryRenderedComponentsWithType(dom, _FilterGuideReactJs.FilterGuideListElement);
    (0, _chai.expect)(filterelements).to.have.length(2);

    // Test first element has label
    var label = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(filterelements[0], 'element-label').getDOMNode().textContent;
    (0, _chai.expect)(label).to.equal('test');

    // Click on element
    _reactLibReactTestUtils2['default'].Simulate.click(_reactLibReactTestUtils2['default'].findRenderedDOMComponentWithTag(filterelements[0], 'a'));
    (0, _chai.expect)(select.calledWith({ value: 'test', type: 'testType' })).to.be.ok; // eslint-disable-line no-unused-expressions
  });
});