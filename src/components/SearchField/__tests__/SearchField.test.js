'use strict';
import {expect} from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import SearchField from '../SearchField.react';
import Token from '../../TokenList/Token.react.js';
import React from 'react';

describe('Test the SearchField component', () => {
  it('displays a string with a close button', ()=> {
    let state = {
      query: ['test1', 'test2']
    };

    // Create TokenList Compontent
    let element = React.createElement(SearchField, state);
    let dom = TestUtils.renderIntoDocument(element);
    // Test state
    expect(dom.state.query).to.have.length(2);

    // Test tokens are created
    let Tokens = TestUtils.scryRenderedComponentsWithType(dom, Token);
    expect(Tokens).to.have.length(2);

    // remove first button
    let label = TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'text').getDOMNode().textContent;
    expect(label).to.equal('test2');
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'remove'));
    expect(dom.state.query).to.have.length(1);
    Tokens = TestUtils.scryRenderedComponentsWithType(dom, Token);

    // Test that one has been removed
    expect(Tokens).to.have.length(1);

    // Make sure the right button is removed
    label = TestUtils.findRenderedDOMComponentWithClass(dom, 'text').getDOMNode().textContent;
    expect(label).to.equal('test1');
  });
});
