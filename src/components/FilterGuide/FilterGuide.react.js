'use strict';
import React from 'react';
import _ from 'lodash';

/**
 * Create a List of words for filtering the searchresult
 */
const FilterGuide = React.createClass({
  propTypes: {
    elements: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className='filterguide-wrapper'>
        <div className='filterguide'>
          <FilterGuideList {...this.props}/>
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
    elements: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },
  render() {
    const {select, elements} = this.props;
    const listItems = elements.map((element, i) => (<FilterGuideListElement select={select} key={i} label={element.label}/>));
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
    const {select, label} = this.props;
    return (
      <li className='filterguide-list-element'>
        <a onClick={select.bind(null, this.props)} href='#' className='element-label'>{label}</a>
      </li>
    );
  }
});

export default FilterGuide;
