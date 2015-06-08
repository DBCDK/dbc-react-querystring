'use strict';
import React from 'react';
import _ from 'lodash';

/**
 * Create a List of words for filtering the searchresult
 */
const FilterGuide = React.createClass({
  propTypes: {
    elements: React.PropTypes.array.isRequired
  },
  render() {
    const {elements} = this.props;
    return (
      <div className='filterguide-wrapper'>
        <div className='filterguide'>
          <FilterGuideList elements={elements}/>
        </div>
      </div>
    );
  }
});

/**
 * Render an array of words as a scrollable list
 */
const FilterGuideList = React.createClass({
  propTypes: {
    elements: React.PropTypes.array.isRequired
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
    label: React.PropTypes.string.isRequired
  },
  render() {
    const {label} = this.props;
    return (
      <li className='filterguide-list-element'>
        <span className='element-label'>{label}</span>
      </li>
    );
  }
});

export default FilterGuide;
