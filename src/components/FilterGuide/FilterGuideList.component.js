'use strict';
import React from 'react';
import FilterGuideListElement from './FilterGuideListElement.component.js';
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
    const listItems = elements.map((element, i) => (<FilterGuideListElement select={select} key={i} element={element}/>));
    return (
      <ul className='filterguide-list'>
        {listItems}
      </ul>
    );
  }
});

export default FilterGuideList;
