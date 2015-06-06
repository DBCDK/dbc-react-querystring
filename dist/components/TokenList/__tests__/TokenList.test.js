'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _TokenListReactJs = require('../TokenList.react.js');

var _TokenListReactJs2 = _interopRequireDefault(_TokenListReactJs);

var _TokenReactJs = require('../Token.react.js');

var _TokenReactJs2 = _interopRequireDefault(_TokenReactJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

describe('Test the TokenList component', function () {
  it('displays a string with a close button', function () {
    var remove = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    var state = {
      query: ['test'],
      remove: remove
    };

    // Create TokenList Compontent
    var element = _react2['default'].createElement(_TokenListReactJs2['default'], state);
    var dom = _reactLibReactTestUtils2['default'].renderIntoDocument(element);
    // Test state
    (0, _chai.expect)(dom.state.query).to.have.length(1);

    // Test button is created
    var btnStrings = _reactLibReactTestUtils2['default'].findRenderedComponentWithType(dom, _TokenReactJs2['default']);

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