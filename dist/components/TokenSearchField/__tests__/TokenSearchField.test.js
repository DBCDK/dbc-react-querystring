'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _TokenSearchFieldComponentJs = require('../TokenSearchField.component.js');

var _TokenSearchFieldComponentJs2 = _interopRequireDefault(_TokenSearchFieldComponentJs);

var _TokenListTokenComponentJs = require('../../TokenList/Token.component.js');

var _TokenListTokenComponentJs2 = _interopRequireDefault(_TokenListTokenComponentJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

describe('Test the SearchField component', function () {
  it('displays a string with a close button', function () {
    var updateSpy = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    var state = {
      query: [{ value: 'test1', index: 1 }, { value: 'test2', index: 2 }],
      update: updateSpy
    };

    // Create TokenList Compontent
    var element = _react2['default'].createElement(_TokenSearchFieldComponentJs2['default'], state);
    var dom = _reactLibReactTestUtils2['default'].renderIntoDocument(element);
    // Test state
    (0, _chai.expect)(dom.state.query).to.have.length(2);

    // Test tokens are created
    var Tokens = _reactLibReactTestUtils2['default'].scryRenderedComponentsWithType(dom, _TokenListTokenComponentJs2['default']);
    (0, _chai.expect)(Tokens).to.have.length(2);

    // remove first button
    var label = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(Tokens[0], 'text').getDOMNode().textContent;
    (0, _chai.expect)(label).to.equal('test2');
    _reactLibReactTestUtils2['default'].Simulate.click(_reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(Tokens[0], 'remove'));
    (0, _chai.assert)(updateSpy.calledWith([{ value: 'test1', index: 1 }]), 'called with remaining object');
    // remove last button
    label = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(Tokens[1], 'text').getDOMNode().textContent;
    (0, _chai.expect)(label).to.equal('test1');
    _reactLibReactTestUtils2['default'].Simulate.click(_reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(Tokens[1], 'remove'));
    (0, _chai.assert)(updateSpy.calledWith([{ value: 'test2', index: 2 }]), 'called with remaining object');
  });
});