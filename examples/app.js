import React from 'react';
import SearchField from '../src/components/SearchField/SearchField.js';

let data = {}
data.query = [
  {
    text: 'test',
    query: 'test'
  },
  {
    text: 'test2',
    query: 'test=test'
  }
]

const element = React.createElement(SearchField, data);
React.render(element, document.getElementById('searchfield'));
