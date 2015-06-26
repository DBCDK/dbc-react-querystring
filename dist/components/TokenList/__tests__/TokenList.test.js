'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @file
 * Test Tokenlist component
 */

var _chai = require('chai');

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _TokenListComponentJs = require('../TokenList.component.js');

var _TokenListComponentJs2 = _interopRequireDefault(_TokenListComponentJs);

var _TokenComponentJs = require('../Token.component.js');

var _TokenComponentJs2 = _interopRequireDefault(_TokenComponentJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

describe('Test the TokenList component', function () {
  it('displays a string with a close button', function () {
    var remove = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    var state = {
      query: [{ value: 'test', index: 1 }],
      remove: remove
    };

    // Create TokenList Compontent
    var element = _react2['default'].createElement(_TokenListComponentJs2['default'], state);
    var dom = _reactLibReactTestUtils2['default'].renderIntoDocument(element);
    // Test state
    (0, _chai.expect)(dom.state.query).to.have.length(1);

    // Test button is created
    var btnStrings = _reactLibReactTestUtils2['default'].findRenderedComponentWithType(dom, _TokenComponentJs2['default']);

    // Test button has properties
    var label = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(btnStrings, 'text').getDOMNode().textContent;
    var x = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(btnStrings, 'remove').getDOMNode().textContent;
    (0, _chai.expect)(label).to.equal('test');
    (0, _chai.expect)(x).to.equal('x');

    // Test remove button
    _reactLibReactTestUtils2['default'].Simulate.click(_reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(dom, 'remove'));

    // Test state is updated
    (0, _chai.expect)(remove.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });
});