import React from 'react';
import SearchField from '../src/components/SearchField/SearchField.js';

let data = {}
data.query = [
  {
    index: 0,
    text: 'test',
    query: 'test'
  },
  {
    index: 1,
    text: 'test2',
    query: 'test=test'
  }
]

const element = React.createElement(SearchField, data);
React.render(element, document.getElementById('searchfield'));
