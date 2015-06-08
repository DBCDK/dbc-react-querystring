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
    const listItems = elements.map((element) => (<FilterGuideListElement element={element}/>));
    return (
      <div className='filterguide-list'>
        {listItems}
      </div>
    );
  }
});

const FilterGuideListElement = React.createClass({

  render() {
    const {element} = this.props;
    return (
      <div className='filterguide-list-element'>
        {element}
      </div>
    );
  }
});


export default FilterGuide;
