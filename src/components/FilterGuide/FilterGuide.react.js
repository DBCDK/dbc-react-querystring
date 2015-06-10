'use strict';
import React from 'react';

/**
 * Create a List of words for filtering the searchresult
 *
 */
export const FilterGuide = React.createClass({
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
export const FilterGuideList = React.createClass({
  propTypes: {
    elements: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },
  render() {
    const {select, elements} = this.props;
    const listItems = elements.map((element, i) => (<FilterGuideListElement select={select} key={i} element={element}/>));
    return (
      <ul className='filterguide-list'>
        {listItems}
      </ul>
    );
  }
});

/**
 * Render an element for a Filterguide list
 *
 */
export const FilterGuideListElement = React.createClass({
  propTypes: {
    element: React.PropTypes.object.isRequired,
    select: React.PropTypes.func.isRequired
  },
  render() {
    const {select, element} = this.props;
    return (
      <li className='filterguide-list-element'>
        <a onClick={select.bind(null, this.props.element)} href='#' className='element-label'>{element.value}</a>
      </li>
    );
  }
});

export default FilterGuide;
