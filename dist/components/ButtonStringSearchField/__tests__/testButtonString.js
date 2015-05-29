'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chai = require('chai');

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

var _ButtonStringSearchFieldReactJs = require('../ButtonStringSearchField.react.js');

var _ButtonStringSearchFieldReactJs2 = _interopRequireDefault(_ButtonStringSearchFieldReactJs);

var _ButtonStringReactJs = require('../ButtonString.react.js');

var _ButtonStringReactJs2 = _interopRequireDefault(_ButtonStringReactJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

describe('Test the TokenList component', function () {
  it('displays a string with a close button', function () {
    var state = { query: [{
        index: 'test',
        text: 'test',
        query: 'query',
        color: 'red'
      }] };

    // Create TokenList Compontent
    var element = _react2['default'].createElement(_ButtonStringSearchFieldReactJs2['default'], state);
    var dom = _reactLibReactTestUtils2['default'].renderIntoDocument(element);
    // Test state
    (0, _chai.expect)(dom.state.query).to.have.length(1);

    // Test button is created
    var btnStrings = _reactLibReactTestUtils2['default'].findRenderedComponentWithType(dom, _ButtonStringReactJs2['default']);

    // Test button has properties
    var label = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(btnStrings, 'text').getDOMNode().textContent;
    var x = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(btnStrings, 'remove').getDOMNode().textContent;
    (0, _chai.expect)(label).to.equal('test');
    (0, _chai.expect)(x).to.equal('x');

    // Test remove button
    _reactLibReactTestUtils2['default'].Simulate.click(_reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(dom, 'remove'));
    (0, _chai.expect)(_reactLibReactTestUtils2['default'].scryRenderedComponentsWithType(dom, _ButtonStringReactJs2['default']).length).to.equal(0);

    //Test state is updated
    (0, _chai.expect)(dom.state).to.deep.equal({ query: [] });
  });
});