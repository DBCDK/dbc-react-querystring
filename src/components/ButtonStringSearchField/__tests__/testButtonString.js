"use strict";
import assert from 'assert';
import {expect, should} from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import ButtonStringSearchField from '../ButtonStringSearchField.react.js';
import ButtonString from '../ButtonString.react.js';
import React from 'react';

describe('Test the ButtonStringSearchField component', () => {
  it('displays a string with a close button', ()=> {
    let state = {query: [{
      index : 'test',
      text : 'test',
      query: 'query',
      color: 'red'
    }]};

    // Create ButtonStringSearchField Compontent
    let element = React.createElement(ButtonStringSearchField, state);
    let dom = TestUtils.renderIntoDocument(element);
    // Test state
    expect(dom.state.query).to.have.length(1);

    // Test button is created
    let btnStrings = TestUtils.findRenderedComponentWithType(dom, ButtonString);

    // Test button has properties
    let label = TestUtils.findRenderedDOMComponentWithClass(btnStrings, 'text').getDOMNode().textContent;
    let x = TestUtils.findRenderedDOMComponentWithClass(btnStrings, 'remove').getDOMNode().textContent;
    expect(label).to.equal('test');
    expect(x).to.equal('x');

    // Test remove button
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(dom, 'remove'));
    expect(TestUtils.scryRenderedComponentsWithType(dom, ButtonString).length).to.equal(0);

    //Test state is updated
    expect(dom.state).to.deep.equal({query: []});
  });
});