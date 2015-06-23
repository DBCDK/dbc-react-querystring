'use strict';
import React from 'react';
import FilterGuideList from './FilterGuideList.component.js';

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
      <div className='filterguide-wrapper' >
        <div className='filterguide' >
          <FilterGuideList {...this.props}/>
        </div>
      </div>
    );
  }
});

export default FilterGuide;
