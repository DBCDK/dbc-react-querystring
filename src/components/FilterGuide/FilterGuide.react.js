'use strict';
import React from 'react';
import _ from 'lodash';

/**
 * Create a List of words for filtering the searchresult
 */
const FilterGuide = React.createClass({
  propTypes: {
    elements: React.proptypes.array.isRequired
  },
  render() {
    const {elements} = this.props;
    return (
      <div className='filterguide'>
        <FilterGuideList elements={elements}/>
      </div>
    );
  }
});

/**
 * Render an array of words as a scrollable list
 */
const FilterGuideList = React.createClass({
  propTypes: {
    elements: React.proptypes.array.isRequired
  },
  render() {
    const {elements} = this.props;
    const listItems = elements.map((element) => (<FilterGuideListElement label={element.label}/>));
    return (
      <ul className='filterguide-list'>
        {listItems}
      </ul>
    );
  }
});

const FilterGuideListElement = React.createClass({
  propTypes: {
    label: React.proptypes.string.isRequired
  },
  render() {
    const {label} = this.props;
    return (
      <li className='filterguide-list-element'>
        <span className='label'>{label}</span>
      </li>
    );
  }
});

export default FilterGuide;
